import React, { useState, useEffect } from 'react'
import './PhotoGallery.css'

export function PhotoGallery() {
  const images = [
    {
      id: 1,
      name: '雏田',
      image:
        'http://img1.imgtn.bdimg.com/it/u=2343882896,3900438165&fm=214&gp=0.jpg',
    },
    {
      id: 2,
      name: '井野',
      image: 'http://dik.img.kttpdq.com/pic/3/1551/56acacffa06a4ff4.jpg',
    },
    {
      id: 3,
      name: '鸣人',
      image: 'http://uploads.5068.com/allimg/1802/179-1P201191214.jpg',
    },
    {
      id: 4,
      name: '我爱罗',
      image:
        'http://b-ssl.duitang.com/uploads/item/201501/26/20150126151152_jBTe4.thumb.224_0.jpeg',
    },
    {
      id: 5,
      name: '小李',
      image:
        'http://img1.imgtn.bdimg.com/it/u=775080899,3239159072&fm=26&gp=0.jpg',
    },
    {
      id: 6,
      name: '自来也',
      image:
        'http://dik.img.kttpdq.com/pic/134/93294/2b6f63eac0d45068_200x150.jpg',
    },
    {
      id: 7,
      name: '卡卡西',
      image:
        'http://www.laomaotaopan.com/zhuti/UploadPic/2016-11/soft_20161113151325785.jpg',
    },
    {
      id: 8,
      name: '鹿丸',
      image:
        'http://img5.imgtn.bdimg.com/it/u=1969370364,1160313707&fm=26&gp=0.jpg',
    },
    {
      id: 9,
      name: '牙',
      image: 'http://img.tukexw.com/img/5a6b15a029ee91bc.jpg',
    },
  ]

  function handleAmplify(e) {}
  return (
    <div className="wrapper">
      {images.map(item => (
        <img
          className="images"
          src={item.image}
          title={item.name}
          key={item.id}
          onClick={handleAmplify}
        />
      ))}
    </div>
  )
}
