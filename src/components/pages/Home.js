import React, { Component } from 'react';
import Search from '../Search';
import unsplash from '../unsplash'
import downloadIcon from '../download.svg'
import { Link } from 'react-router-dom';

class Home extends Component {

    state = {
        photos: [],
        page: 1,
        searching: false ,
        loading : true
 
        
    }
    searchData = (data) => {
 
        this.setState({ 
            photos: data ,
            searching: true,


        });

    }

    componentDidMount(e) {
        unsplash.get('/photos', {
            params: {
                page: e,
                per_page: 16
            }
        }).then((res) => {
            this.setState({

                photos: res.data ,
                loading:false
            });
        })

        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    };

    loadNextPage = () => {
        this.componentDidMount(this.state.page + 1)

    }

    loadNextSearchPage=()=>{


    }
    render() {

        if(this.state.searching === false) {
            // var searchHeadin = <h2>You searched with <i>{this.state.SearchValue}</i></h2>
           
           var loadMoreButton = <button className="btn btn-success" onClick={this.loadNextPage}>Load More </button>

        }

        if(this.state.loading === true) {
         
            var Loading =   <div className="row text-center"><div className="col"><h1>Loading Please Wait</h1></div></div>
   
        } 
        return (
            <React.Fragment>
                <div className="container">
                {Loading}                   

                    <div className="row top-heading my-5">
                        <div className="col-lg-3 my-auto text-left">

                            <h3>Latest Photos</h3>
                        </div>
                        <div className="col-lg-9 col-auto my-auto text-right">
                            <Search ondata={this.searchData} />
                        </div>
                    </div>
                    <div className="row">
                        {
                            this.state.photos.map((photo) => (
                                <div key={photo.id} className="col-lg-3">
                                    <div className="single-photo-item">
                                    {/* <a className="d-block" href={'photo?id=' + photo.id}> */}
                                        <Link className="d-block" to={"/photo?id=" + photo.id}>
                                            <div className="photo-wrapper">
                                                <img src={photo.urls.small} alt={photo.description} />
                                            </div>
                                            <h5>{photo.description}</h5>
                                            <p className="cat-name">by - {photo.user.first_name} {photo.user.last_name}</p>
                                    
                                        </Link>

                                        {/* </a> */}
                                        <a className="dl-icon" rel="noopener noreferrer" title="Download" target="_blank" href={photo.links.download} download><img src={downloadIcon} alt="download"/></a>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="row mt-5">
                        <div className="col-lg-12 text-center">
                    <div className="load-more-btn"> {loadMoreButton}</div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Home;


