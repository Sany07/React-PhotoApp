import React, { Component } from 'react';
import unsplash from './unsplash'



class Search extends Component {

    state={

        SearchValue : '' ,
      //  searchData : []
    }

    onChangeValue=(event)=>{

        this.setState({SearchValue:event.target.value}) ;

    }

    onSubmitForm=(event)=>{

        event.preventDefault();
    
        unsplash.get('/search/photos' ,{
            params :{
                query : this.state.SearchValue,
                    per_page : 1 

                        }

            }).then((res)=>{

                    //this.setState({searchData: res.data.results});
                    this.props.ondata(res.data.results);
                   
            })

        }
    render() {
        return (
     
            <form onSubmit={this.onSubmitForm}>
                <input onChange={this.onChangeValue} value={this.state.SearchValue} type="text" placeholder="Search keyword"/>
                <input  type="submit" value="search"/>
            </form>
            
      
        );

    }
}

export default Search;