
import {observable, action, computed, autorun} from  "mobx"
import {axios} from "&"



class Mobx {

    @observable dataSource = [];  // state 
    @observable forum=[];


    @action getList = async (url)  => {
        console.log(6666)
        const res = await axios.get(url);
        this.dataSource = res.data.result ;
    }
    @action getForum = async (url,cb=()=>{})  => {
        const res = await axios.get(url);
        this.forum = res.data.result ;
        cb();
    }
    @action rateAdd = (index,num)=>{
        this.forum[index].hot+=num
        return this.forum
    }
}

export default new Mobx();