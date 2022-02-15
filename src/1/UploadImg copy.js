import React, { useState } from 'react'
import axios from 'axios'
/////////////////////////
async function postImage({image, description}) {
  const formData = new FormData();
  formData.append("image", image)
  formData.append("description", description)
//
  const result = await axios.post('/uploads', formData, { headers: {'Content-Type': 'multipart/form-data'}})
  return result.data
}
/////////////////////////
export default function UploadImg() {
//
const [file, setFile] = useState()
const [images, setImages] = useState([])
//
  const submit = async event => {
    event.preventDefault()
    const result = await postImage({image: file})
    setImages([result.image, ...images])  
  }
//
  const fileSelected = event => {
    const file = event.target.files[0]
		setFile(file)
	}
/////////////////////////
  return (
    <div className="App">

      <form onSubmit={submit}  method="post" enctype="multipart/form-data" action="/uploads"  >
        <input onChange={fileSelected} type="file" accept="image/*" name="image"></input>
        <input type="submit" name="button" value="Upload image"/>
      </form>

      { images.map( image => (
        <div key={image}>
          <img src={image} alt="alt img"></img>
        </div>
      ))}


<hr/>

<form action="/uploads" method="post" enctype="multipart/form-data">
<input type="file" name="image"/>
<input type="submit" name="button" value="Upload image"/>
</form>

    </div>
  );
}


