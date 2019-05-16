//Component
//Function
import React from 'react';
import DefaultInput from './DefaultInput';
import PropTypes from 'prop-types'
import { Book } from './Book'
import { Hiring } from './Hiring'
import { NotHiring } from './NotHiring'

class Library extends React.Component {
    static defaultProps = {
        books :[
             {"title":"Default Title", "author":"Default Author", "pages":0}
        ]
    }
    
        //Adding local state - so we use constructor
        // constructor(props) {
        //     super(props) // super creates new instance of class
        //     this.state ={
        //         open: true //open key states weather library should be open
        //     }
        //     this.toggleOpenClosed = this.toggleOpenClosed.bind(this)
        // }
    
        //Without Constructor - add static prop state to component instead in a constr
        state = { 
            open:true,
            freeBookmark:false,
            hiring: true,
            data:[],
            loading:false
        }
    
        componentDidMount(){
            console.log("The component is now mounted")
            this.setState({loading:true})
            //fetch('http://localhost:56629/api/weatherforecasts')
            fetch('https://hplussport.com/api/products/order/price/sort/asc/qty/1')
            .then(data => data.json())
            .then(data => this.setState({data,loading:false}))
        }
    
        componentDidUpdate(){
            console.log("The component just updated")
        }
        //toggleOpenClosed(){ or can use arrow Functiontion to bind toggle directly
        toggleOpenClosed = () => {    
        this.setState(prevState => ({
                //open: !this.state.open or can use as below:
                open : !prevState.open
            }))
        }
        render() {
            //console.log(this.state)
            const { books }= this.props
            return (
                <div>
                    <DefaultInput></DefaultInput>                
                    {this.state.hiring ? <Hiring/> : <NotHiring/>}
                    {this.state.loading
                        ?"loading..."
                        : <div>
                            <h3>Weather for the week!</h3>
                            {/* {this.state.data.map(product => {
                                return (
                                    <div key ={product.id}>
                                        <h3>Library Product of the week!</h3>
                                        <h4>{product.name}</h4>
                                        <h4>{product.description}</h4>
                                        <h4>{product.price}</h4>
                                        <img alt="" src={product.image_title} height ={100}/>
                                    </div>   
                                )
                            })} */                        
                            this.state.data.map((weather,index) => {
                                return (
                                    //<div id={weather.temperatureC}>
                                    <tbody>
                                        <tr key = {index}>                                        
                                            <td><h4>Date : {weather.dateFormatted}</h4></td>
                                            <td><h4>{weather.temperatureC} °C</h4></td>
                                            <td><h4>{weather.temperatureF} °F</h4></td>
                                            <td><h4>Summary : {weather.summary}</h4></td>
                                        </tr>
                                    </tbody>
                                    //</div>   
                                )
                            })}
                        </div>
                    }
                    <h1>The Library is {this.state.open? 'open' : 'closed'}</h1>
                    <button onClick={this.toggleOpenClosed}>Change State</button>
                    {books.map(
                        (book,i) =>
                        <Book 
                        key={i}
                        title={book.title}
                        author={book.author}
                        pages={book.pages} 
                        freeBookmark={this.state.freeBookmark}/>
                    )}            
                </div>
            )
        }	
    }
    
    // class ColorForm extends React.Component {
    //     state = {value:''}
    
    //     newColor = e =>
    //         this.setState({ value: e.target.value })
    
    //     submit = e => {
    //         // eslint-disable-next-line no-template-curly-in-string
    //         console.log(`New Color: ${this.state.value}`)
    //         e.preventDefault()
    //     }
    
    
    //     render() {
    //             return(
    //                 <form onSubmit={this.submit}>
    //                     <label> Pick a color :
    //                         <input 
    //                             type='color'
    //                             onChange={this.newColor}
    //                         />
    //                     </label>
    //                     <button>Submit</button>
    //                 </form>
    //             )
    //     }
    // } 
    Library.propTypes = {
        books: PropTypes.array
    }
    
    Book.propTypes = {
        title: PropTypes.string,
        author: PropTypes.string,
        pages: PropTypes.number,
        freeBookmark: PropTypes.bool
    }

    export default Library
    