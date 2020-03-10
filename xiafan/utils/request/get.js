

export default ({url,data,xhost})=>{
  return new Promise((resolve,reject)=>{
    wx.request({
      url,
      data,
      header:{
          "X-Client-Info":'{ "a": "3000", "ch": "1002", "v": "5.0.4", "e": "1574249363695784702927", "bc": "110100" }',
          "X-Host":xhost
      },
    success:res=>{
      resolve(res)
    },
      fail:err=>{
        reject(err)
      }
    })
  })
}