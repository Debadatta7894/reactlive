import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";


export function VideoEdit()
{
    const [videos, setVideos] = useState([{id:0, title:'', url:'', views:0, likes:0, subscribed:false}]);
    const params = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        axios({
            method: 'get',
            url: `http://127.0.0.1:5050/videos/${params.id}`
        }).then(response=>{
            setVideos(response.data);
        })
    },[]);

    const formik = useFormik({
        initialValues: {
            id: videos[0].id,
            title: videos[0].title,
            url:videos[0].url,
            likes:videos[0].likes,
            views: videos[0].views,
            subscribed: videos[0].subscribed
        },
        onSubmit : (values) => {
           axios({
            method: 'put',
            url: `http://127.0.0.1:5050/updatevideo/${values.id}`,
            data: values
           })
           alert("Record Updated");
           navigate("/manage");
        },
        enableReinitialize: true
       
    });
   
    return(
        <div>
            <h2>Edit Video Details</h2>
            <form onSubmit={formik.handleSubmit}>
         <dl>
                    <dt>Video Id</dt>
                    <dd><input type="number" name="id" value={formik.values.id}  onChange={formik.handleChange}  /></dd>
                    <dt>Title</dt>
                    <dd><input type="text" name="title" value={formik.values.title} onChange={formik.handleChange} /></dd>
                    <dt>URL</dt>
                    <dd><input type="text" name="url" value={formik.values.url} onChange={formik.handleChange} /></dd>
                    <dt>Likes</dt>
                    <dd><input type="number" name="likes" value={formik.values.likes} onChange={formik.handleChange}  /></dd>
                    <dt>Views</dt>
                    <dd><input type="number" name="views" value={formik.values.views} onChange={formik.handleChange}  /></dd>
                    <dt>Subscribed</dt>
                    <dd className="form-switch">
                        <input className="form-check-input" type="checkbox" checked={formik.values.subscribed} name="subscribed" onChange={formik.handleChange} />
                    </dd>
                </dl>
                <button className="btn btn-success me-2 ">Save</button>
                <Link to="/manage" className="btn btn-warning">Cancel</Link>
         </form>
        </div>
    )
}