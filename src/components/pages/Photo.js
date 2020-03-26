import React, { Component } from 'react';
import unsplash from '../unsplash';
import downloadIcon from '../download.svg'


class Photo extends Component {

    state = {
        photo: [],
        loading: true,
    }

    componentDidMount() {


        let search = window.location.search;
        let params = new URLSearchParams(search);
        let photo_id = params.get('id');


        unsplash.get('/photos/' + photo_id, {


        }).then((res) => {

            this.setState({ photo: res.data });


        })

    }


    render() {

        return (

            <div className="container">

                {this.state.photo.description ? <h2 className="text-center">{this.state.photo.description}</h2> : ''}
                <div className="photo-single-wrapper">
                    <div className="photo-single-info">

                        <ul>
                            <li><label htmlFor="uplaodedd_by">Uploaded by</label> {this.state.photo.user && this.state.photo.user.first_name} {this.state.photo.user && this.state.photo.user.last_name}</li>

                            {this.state.photo.updated_at ? <li><label htmlFor="upload_date">Upload date</label> {this.state.photo.updated_at}</li> : ''}

                            <li><label htmlFor="camera_model">Camera model</label> {this.state.photo.exif && this.state.photo.exif.model}</li>

                        </ul>

                        <a href={this.state.photo.links && this.state.photo.links.download} download>Download <img src={downloadIcon} alt="download" /></a>
                    </div>
                    <div className="photo-img-n"><img src={this.state.photo.urls && this.state.photo.urls.full} alt={this.state.photo.alt_description} /> </div>
                </div>
                {console.log(this.state.photo)}
            </div>
        );
    }
}

export default Photo;