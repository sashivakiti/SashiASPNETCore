import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import './index.css';
//import NumberFormat from 'react-number-format';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import DefaultInput from './DefaultInput';
import Library from './Library'


// var NumberFormat = require('react-number-format');
 
// <NumberFormat 
// value={2456981} 
// displayType={'text'} 
// thousandSeparator={true} 
// prefix={'$'} />

// var style = {
//     backgroundColor : 'lightsteelblue',
//     color: 'White',
//     fontFamily: 'Arial'
// }

// //title
// const title = React.createElement(
//     'h1',
//     {id: 'title', className: 'header', style: style}, 
//     'React UI App'
//     )
// ReactDOM.render(
//     title,
//     document.getElementById('root')
//     )

// //UnorderList
// const ulst = React.createElement(
//     'ul',
//     {id: 'ul', className: 'ulheader', style: style}, 
//     React.createElement(
//         'li',
//         {},
//         'items on our list'
//         )
//     )
// ReactDOM.render(
//     ulst,
//     document.getElementById('root')
//     )



// class  Message extends React.Component{
//     render(){
//         console.log(this.props)
//         return(
//             <div style={style}>
//             <h1 style={{color:this.props.color}}>
//             {this.props.msg} 
//             </h1>
//             <p> This is the Start - {this.props.minutes} minutes</p>
//         </div>
//         )
//     }
// }

// ReactDOM.render(
//     // <div style={style}>
//     //     <h1 id="heading-element"> react UI App</h1>
//     //     <p> This is the Start</p>
//     // </div>
//     <Message color="black" date={Date()} msg='react UI App' minutes={5} />
//     ,
//     document.getElementById('root')
//     )


    // let skiData={
    //     total:50,
    //     powder:20,
    //     backcountry:10,
    //     goal:100
    // }

    // const getPercent = decimal => {
    //         return decimal * 100 + '%'
    //     }
    // const calGoalProgress = (total,goal) => {
    //         return getPercent(total/goal)
    //     }


    // const SkiDayCounter = ({total,powder,backcountry,goal}) => {
    //     return(
    //         <section style={style}>
    //             Ski Days
    //             <div>
    //                 <p> Total Days : {total}</p>
    //             </div>
    //             <div>
    //                 <p> Powder Days : {powder}</p>
    //             </div>
    //             <div>
    //                 <p> Backcountry Days : {backcountry}</p>
    //             </div>
    //             <div>
    //                 <p> Goal Progress: {calGoalProgress(total,goal)}</p>
    //             </div>
    //         </section>
    //     )
    // }
    //--or
    // class SkiDayCounter extends Component {

    //     getPercent = decimal => {
    //         return decimal * 100 + '%'
    //     }
    //     calGoalProgress = (total,goal) => {
    //         return this.getPercent(total/goal)
    //     }
    //     render(){
    //         const {total,powder,backcountry,goal} = this.props
    //         return(
    //             <section style={style}>
    //                 Ski Days
    //                 <div>
    //                     <p> Total Days : {total}</p>
    //                 </div>
    //                 <div>
    //                     <p> Powder Days : {powder}</p>
    //                 </div>
    //                 <div>
    //                     <p> Backcountry Days : {backcountry}</p>
    //                 </div>
    //                 <div>
    //                     <p> Goal : {this.calGoalProgress(total,goal)}</p>
    //                 </div>
    //             </section>
    //         )
    //     }
    //}

    // render(
    //     <SkiDayCounter 
    //     total={skiData.total}
    //     powder={skiData.powder}
    //     backcountry={skiData.backcountry}
    //     goal={skiData.goal}/>
    //     ,
    //     document.getElementById('root')
    //     )
//---------------------end of Ski-----------

//---------------Library

let bookList = [
    {"title":"The Sun Also Rises", "author":"Ernest Hemingway", "pages":260},
    {"title":"White Teeth", "author":"Zadie Smith", "pages":350},
    {"title":"Cat's Cradle", "author":"Kurt Vonnegut", "pages":860}
]



//Function
// const Library = ({books}) => {
// 	return (
// 		<div>
//             {books.map(
//                 (book,i) =>
//                 <Book 
//                 key={i}
//                 title={book.title}
//                 author={book.author}
//                 pages={book.pages} />
//             )}            
// 		</div>
// 	)
// }






render(
    <Library books={bookList}/>, 
    //<ColorForm></ColorForm>,
	document.getElementById('root')
)


//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
