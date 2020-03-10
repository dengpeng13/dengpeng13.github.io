



import {observable, action, computed, autorun} from  "mobx"
import {axios} from "&"

class Shopcar {
    @observable carList = [];
    @observable flowersList = []
    // @observable total = 800;
    // @observable carNum = 10;
    // @observable carTotal = 18

    @action getCarList = async (url) =>{
        const res = await axios.get(url);
        this.carList = res.data.result
    }

    @action getflowers = async(url)=>{
        const res = await axios.get(url);
        this.flowersList = res.data.result
    }


    @action delSelect = ()=> {
        axios.post("/react/delSelect").then(res=>{
            this.carList = this.carList.filter(item=>!item.checked);
        })
        
    }

    
   @action changeOneChecked = (checked,ItemCode)=>{
       axios.post("/react/changeChecked",{
           checked,
           ItemCode
       }).then(res=>{
           this.carList = this.carList.map((item)=>{
               if(item.ItemCode == ItemCode){
                   item.checked = checked
               }
               return item
           })

       })
   }

 
    
    @computed get carTotal(){
        var carTotal = 0;
        this.carList.forEach((item)=>{
            carTotal +=item.count;
        })
        return carTotal;
    }

  

    @computed get carNum(){
        var carNum = 0;
        this.carList.forEach((item)=>{
            if(item.checked){
                carNum += item.count;
            }
        })
        return carNum;
    }

    @computed get total(){
        var total = 0;
        this.carList.forEach((item)=>{
            // console.log(item.data.Price)
            if(item.checked){
                total += item.count * item.data.Price;
            }
        })
        return total;
    }

    @action changeOneCount = (ItemCode,flag) =>{
        
        axios.post("/react/changeCount",{
            ItemCode,
            flag
        }).then(res=>{
            this.carList = this.carList.map((item)=>{
                if(item.ItemCode==ItemCode){
                    item.count += flag?1:-1;
                }
                return item;
            })
        })
    }


    
    @action changeOneCountNum = (ItemCode,count  )=>{
        axios.post("/react/changeCount",{
            ItemCode,
            count
        }).then(res=>{
            this.carList = this.carList.map((item)=>{
                if(item.ItemCode==ItemCode){
                    item.count  = count;
                }
                return item;
            })
        })
    }



    @action changeQuan = checked =>{
        axios.post("/react/changeChecked",{
            checked,
        }).then(res=>{
            this.quan = checked;
        })
        
    }
    
    // @action changeQuan = checked =>{
    //     axios.post("/react/changeChecked",{
    //         checked,
    //     }).then(res=>{
    //         this.quan = checked;
    //     })
        
    // }
    @computed get quan(){
        var quan = true;
        this.carList.forEach((item)=>{
            if(!item.checked){
                quan = false
            }
        })
        return quan
    }

    set quan(newVal){
        this.carList = this.carList.map((item)=>{
            item.checked = newVal;
            return item;
        })
    }



}


export default new Shopcar()