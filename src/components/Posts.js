import React,{useState} from 'react';
import  { addPost,deletePost,updatePost} from '../redux/postsSlice';
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';

 export default function Posts () {
  const[title,setTitle]=useState("");
    const[description,setDescription]=useState("");

    const[updatedtitle,setupdatedtitle]=useState("");
    const[updatedescription,setupdatedescription]=useState("");

const [edit,setedit]=useState(false);
const [id,setid]=useState(false);

const posts = useSelector((state) => state.posts.items)

 const dispatch = useDispatch();
const hundlsubmit=(e)=>{
e.preventDefault();
dispatch (addPost({id:posts.length+1, title, description}) )
setTitle("");
setDescription("");
}
    return (
    <div key='1'>
    <div className='form' key ='2'>
    
    <input type="text" value={title} placeholder='enter post title' 
    onChange={(e)=>setTitle(e.target.value)}/>
        <input type="text" value={description}placeholder='enter post description'
        onChange={(e)=> setDescription(e.target.value)}
        />
<button onClick={hundlsubmit} > Add post</button>
    </div>
    
    <div className='posts' key='5'>
    {posts.length>0 && posts.map(post=>
    <div key={post.id} className='post'>
    <h2>{post.title}</h2>
    <p>{post.description}</p>
    <button onClick={()=>{setedit(true) 
       setid(post.id)}}>Edit</button>
    <button onClick={()=>dispatch(deletePost(post.id))}>Delete</button>
    {edit && id==post.id && ( 
      <div className='form'>
<input onChange={(e)=>setupdatedtitle(e.target.value)} type="text" placeholder='Update Title' />
<input onchange={(e)=>setupdatedescription(e.target.value)} type="text" placeholder='Update Description' />
<button onClick={()=>dispatch(updatePost({id:post.id,title:updatedtitle,description:updatedescription})) }>Update</button>
</div>

        
    )}
    </div>) }
    </div>
    </div>
  )
}
