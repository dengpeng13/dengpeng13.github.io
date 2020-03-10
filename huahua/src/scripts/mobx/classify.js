
import {observable, action, computed, autorun} from  "mobx"
import {axios} from "&"










class Classify {

    @observable shangpingList = []

    @observable shangpingLists = []

    @observable searchList = []


    @action getShangpingList = async (url) =>{
        const res = await axios.get(url);
        this.shangpingList = res.data.result
    }
    @action getShangpingLists = async (url) =>{
        const res = await axios.get(url);
        this.shangpingLists = res.data.result
    }

    @action getSearchList = async(url,params)=>{
        const res = await axios.get(url,params);
        this.searchList = res.data.result
    }

}

export default new Classify()