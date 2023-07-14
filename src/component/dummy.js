// sharmatha
// sharmatha

// sharmatha — 20/06/2023 12:53
// sindhu.t.e — 20/06/2023 12:53
// sharmatha — 20/06/2023 12:54
// 🥶
// sindhu.t.e — 21/06/2023 10:26
// SindhuIncresco
// sharmatha-Incresco
// sindhu.t.e — 22/06/2023 12:16
// AKIAWF2IOII63NXF4GNJ
// id
// 8TFPE89isfKB+KdFGqxFhwMwvUwfMVyoEqk5HEo7
// secure key ^
// sharmatha — 22/06/2023 12:31
// service: myserverlessproject

// provider:
//     name: aws
//     runtime: nodejs8.x
//     profile: serverlessUser
// Expand
// serverless.yml
// 4 KB
// sharmatha — 22/06/2023 13:32
// DHVKXW9D7L
// sindhu.t.e — 22/06/2023 15:03
// aws_access_key_id=AKIAWN45JSQXQINAT256
// aws_secret_access_key=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
// sharmatha — 22/06/2023 15:26
// https://console.aws.amazon.com/iam/home?region=us-east-1#/users$new?step=final&accessKey&userNames=serverless&permissionType=policies&policies=arn:aws:iam::aws:policy%2FAdministratorAccess
// sindhu.t.e — 23/06/2023 15:25
// https://youtu.be/KFr2UP6xaIM
// YouTube
// Rajacharles SRD
// React Responsive Login Page Using Tailwind CSS @RajacharlesSRD
// Image
// sindhu.t.e — 23/06/2023 15:45
// import Signup from './components/signup';

// function App() {
//   return (
//     <div className="w-screen h-screen bg-yellow-400 justify-items-center">
// <Signup />
//     </div>
//   );
// }

// export default App;
// "./src/*/.{js,jsx,ts,tsx}"
// sindhu.t.e — 26/06/2023 16:29
// sindhu.t.e@increscotech.com
// Moorthy@21
// sharmatha — 26/06/2023 16:30
// https://www.youtube.com/watch?v=BIIfby9aRqA&ab_channel=MuhayimanaNgendo
// YouTube
// Muhayimana Ngendo
// How to use Amazon cognito openid connect hosted UI for iOS & Androi...
// Image
// sindhu.t.e — 26/06/2023 19:13
// GitHub - harivellingiri/awscognito
// https://github.com/harivellingiri/awscognito
// GitHub
// GitHub - harivellingiri/awscognito
// Contribute to harivellingiri/awscognito development by creating an account on GitHub.
// GitHub - harivellingiri/awscognito
// sindhu.t.e — 29/06/2023 09:19
// https://www.freecodecamp.org/news/how-to-use-axios-with-react/
// freeCodeCamp.org
// How To Use Axios With React: The Definitive Guide (2021)
// In this guide, you will see exactly how to use Axios.js with React using tons of real-world examples featuring React hooks. You'll see why you should use Axios as a data fetching library, how to set it up with React, and perform every type of HTTP request with it.
// How To Use Axios With React: The Definitive Guide (2021)
// sindhu.t.e — 29/06/2023 10:05
// AWS_ACCESS_KEY_ID = AKIAWN45JSQXQINAT256
// AWS_SECRET_ACCESS_KEY = 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
// AWS_REGION= ap-south-1
// sindhu.t.e — 29/06/2023 11:20
// import { Injectable } from '@nestjs/common';
// import { Todo } from './todo.model';
// import { db, Table } from '../db.config';


// @Injectable()
// export class TodoService {
// //   private todos: Todo[] = [];

// async createTodo(todo:Todo): Promise<any> {
//   const params = {
//     TableName: Table,
//     Item:todo
//   }
//     await db.put(params).promise()
//     return "user created"; 
// }
// async updateTodo(id: string, user: Todo): Promise<any> {
//   const params = {
//     TableName: Table,
//     Key: {
//       id: id
//     },
//     UpdateExpression: 'set #name=:name, #email=:email, #phone=:phone, #password=:password, #enroll=:enroll, #date=:date',
//     ExpressionAttributeValues: {
//       ":name": user.name, ":email": user.email, ":phone": user.phone, ":password": user.password,":enroll":user.enroll,":date":user.date,          },

//       ExpressionAttributeNames: {
//         "#name": "name",
//         "#email": "email",
//         "#phone": "phone",
//         "#password": "password",
//         "#enroll": "enroll",
//         "#date": "date"
//       }

//   }
//     await db.update(params).promise()
//     return "user updated";
// }


// async deleteTodo(todoid1: String): Promise<any> {
//   const params = {
//     TableName: Table,
//     Key: {
//       id: todoid1
//     }
//   }
//     await db.delete(params).promise();
//     return "Deleted";
// }

// async allTodo(): Promise<any> {
//   const params = {
//     TableName: Table,
//   }
//   try {
//     const { Items = [] } = await db.scan(params).promise()
//     return Items

//   } catch (error) {
//     console.log(error)
//     return false
//   }
// }
// async getTodoById(id: String): Promise<any> {
//   const params = {
//     TableName: Table,
//     Key: {
//       id: id   }
//     }
//     const Item = await db.get(params).promise()
//     return Item;
//  }
// }
// sindhu.t.e — 29/06/2023 11:37
// import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
// import { TodoService } from './todo.service';
// import { Todo } from './todo.model';

// @Controller('todo')
// export class TodoController {
//   constructor(private readonly todoService: TodoService) {}
 
//   @Put(':id')
//   async updateTodo(@Param('id') id: string, @Body() todo: Todo) {
//     const updateuser = await this.todoService.updateTodo(id,todo)
//   }
//   @Get('all')
//   async allTodo(){
//     const alluser = await this.todoService.allTodo();
//   if(!alluser){
//     return "failed"
//   }
//   else {
//   return alluser}
//   }
//   @Get(':id')
//   async getTodoById(@Param('id') id: string) {
//     const speuser = await this.todoService.getTodoById(id)
//       return speuser;
//   }
//   @Delete('/del/:id')
// async deleteTodo(@Param('id') id: string) {
//   const deleteuser = await this.todoService.deleteTodo(id)
// }

// @Post('create')
//   async createTodo( @Body() todo:Todo) {
//     const crtuser = await this.todoService.createTodo(todo)
//   }


// }
// ⁠Unknown
// https://github.com/SindhuIncresco/task2
// GitHub
// GitHub - SindhuIncresco/task2
// Contribute to SindhuIncresco/task2 development by creating an account on GitHub.
// GitHub - SindhuIncresco/task2
// sindhu.t.e — 29/06/2023 15:36
// import axios from "axios";

// import Profile from "../photo.png";
// import React, { useEffect  } from 'react';
// import Navbar from "../navbar/navbar";
// import Header from "../navbar/header";
// Expand
// message.txt
// 4 KB
// import axios from "axios";

// import Profile from "../photo.png";
// import React, { useEffect  } from 'react';
// import Navbar from "../navbar/navbar";
// import Header from "../navbar/header";
// Expand
// message.txt
// 4 KB
// sindhu.t.e — 30/06/2023 09:24
// import axios from "axios";
// import {React ,useState,useEffect} from "react";
// import { useNavigate } from "react-router-dom";


// export function Updateuser({ id }) {
//     const [formData, setFormData] = useState();

//     useEffect(() => {
//       axios
//         .get("todo/" + id)
//         .then((response) => {
//           setFormData(response.data);
//         })
//         .catch(error => {
//           console.error('Error fetching data:', error);
//         });
//     }, [id]);

//     return (
//       <div>
//           <form>
//     <input
//       type="text"
//       name="field1"
//       value={formData.id|| ''}
//       // onChange={event => setFormData({ ...formData, field1: event.target.value })}
//     />
//     {/* Repeat the above input pattern for other fields */}
//     <button type="submit">Update</button>
//   </form>

//       </div>
//     );
//   } 

//   // useEffect(() => {
//   //   setId(props.id);
//   //   setName(props.name);
//   //   setMail(props.email);
//   //   setPhone(props.phone);
//   //   setEnroll(props.enroll);
//   //   setDate(props.date);
//   //   setPass(props.password);
//   // }, [props]);
//      //  function updatePost(id) {
//     //   axios
//     //     .put("todo/" + id, {
//     //       id: iid,
//     //       name: iname,
//     //       email: iemail,
//     //       phone: iphone,
//     //       enroll: ienroll,
//     //       date: idate,
//     //       password: ipass,
//     //     })
//     //     .then((response) => {
//     //       setPost(response.data);
//     //     })
//     //     .catch((error) => {
//     //       console.log(error);
//     //     });
// https://youtu.be/0riHps91AzE please learn from this video. Do a project but dont copy from the video understand the things and do coding will come up with plan for two weeks
// YouTube
// Dipesh Malvia
// Learn React JS with Project in 2 Hours  | React Tutorial for Beginn...
// Image
// sindhu.t.e — 03/07/2023 13:09
// import React, { useState } from 'react';
// import EditBookForm from './EditBookForm';
// import AddBookModal from './Model';

// function BookList() {
//   const [books, setBooks] = useState([
// Expand
// message.txt
// 5 KB
// import React, { useState } from 'react';

// function EditBookForm({ book, updateBook, cancelEdit }) {
//   const [updatedBook, setUpdatedBook] = useState({ ...book });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUpdatedBook((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     updateBook(updatedBook);
//   };

//   const handleCancel = () => {
//     cancelEdit();
//   };

//   return (
//     <form onSubmit={handleSubmit} className="bg-white rounded shadow p-6">
//       <div className="mb-4">
//         <label className="block text-gray-700 text-sm font-bold mb-2">
//           Title:
//         </label>
//         <input
//           type="text"
//           name="title"
//           value={updatedBook.title}
//           onChange={handleChange}
//           className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-gray-700 text-sm font-bold mb-2">
//           Author:
//         </label>
//         <input
//           type="text"
//           name="author"
//           value={updatedBook.author}
//           onChange={handleChange}
//           className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//         />
//       </div>
//       <div className="flex items-center justify-between">
//         <button
//           type="submit"
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//         >
//           Update
//         </button>
//         <button
//           type="button"
//           onClick={handleCancel}
//           className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//         >
//           Cancel
//         </button>
//       </div>
//     </form>
//   );
// }

// export default EditBookForm;
// sharmatha — 03/07/2023 23:08
// hii
// sharmatha — 06/07/2023 10:58
// AWS
// lokeshk182002@gmail.com
// Myawspassword@123
// sharmatha — 10/07/2023 22:40
// https://github.com/sharmatha-incresco/job-dashboard
// GitHub
// GitHub - sharmatha-incresco/job-dashboard: aws and react
// aws and react . Contribute to sharmatha-incresco/job-dashboard development by creating an account on GitHub.
// GitHub - sharmatha-incresco/job-dashboard: aws and react
// sindhu.t.e — 12/07/2023 10:41
// ⁠Unknown
// Localize i18next https://youtu.be/OfJ6Q-JFLL0
// YouTube
// Lokalise
// Translating React apps with I18next
// Image
// sindhu.t.e — 12/07/2023 15:23
// <select className='appearance-none rounded-full p-2 px-5 drop-shadow-2xl text-xs outline-none bg-gray-800 text-white ' onChange={(event)=>handleLanguageChange(event)}>
//             <option value="en">English</option>
//             <option value="es">Español</option>
//           </select>
// sindhu.t.e — 12/07/2023 18:11
// --------async filterJobs(filterValues: object): Promise<Job[] | Job> {

//         console.log("000", filterValues)

//         let query = {}


//         Object.keys(filterValues).forEach((key: string) => {

//             if (key === 'salary') {



//             }
//             else if(filterValues[key].length) {


//                 query[key] = {$in : filterValues[key] } 
//             }




//         })

//         console.log("0000",query)

//         const jobs = await this.jobModel.find(query);
//         console.log("1111",jobs)
//         return jobs;
//     }
// sharmatha — Today at 09:58
// http://ec2-13-127-141-235.ap-south-1.compute.amazonaws.com:3000/api
// sindhu.t.e — Today at 10:24
// https://github.com/SindhuIncresco/reactandnest
// GitHub
// SindhuIncresco/reactandnest
// Contribute to SindhuIncresco/reactandnest development by creating an account on GitHub.
// SindhuIncresco/reactandnest
// sindhu.t.e — Today at 10:58
// import React from "react";
// import { formatDistanceToNow, parseISO, differenceInDays } from 'date-fns';
// import Image from "./applelogo.jpg";

// import { useTranslation } from 'react-i18next'; 
// function Module({ position, company, location ,date}) {
// Expand
// message.txt
// 9 KB
// ﻿
// sindhu.t.e
// sindhu.t.e#3483
// import React from "react";
// import { formatDistanceToNow, parseISO, differenceInDays } from 'date-fns';
// import Image from "./applelogo.jpg";

// // import { useTranslation } from 'react-i18next'; 
// // function Module({ position, company, location ,date}) {
// //   const { t ,i18n } = useTranslation();

// //   let postedAgo = '';
// //   if (date) {
// //     const parsedDate = parseISO(date);
  
// //     if (!isNaN(parsedDate)) {
// //       postedAgo = formatDistanceToNow(parsedDate, { addSuffix: true });
// //     }
// //   }
// //   const getCurrentDate = () => {
// //     const now = new Date();
// //     return now.toISOString().split('T')[0]; 
// //   };
// //   const calculateDaysAgo = (date) => {
// //     const currentDate = getCurrentDate();
// //     const daysAgo = differenceInDays(new Date(currentDate), new Date(date));
// //     return daysAgo;
// //   };
// //   return (
// //     <div className=" w-844 h-204 top-316 left-478 mb-5">
// //       <div class="header col-span-12  bg-gray-700 rounded-lg r">
      
// //         <div class="flex pt-2 allign-justify text-sm text-gray-400">
// //           <img src={Image} class="w-20 h-20  m-5 rounded-lg" alt="Logo" />
// //           <div class="flex-1 inline-flex items-center justify-between">
// //             <div className=" flex pl-3 flex-col text-white ">
// //               <div className=" inline-flex flex-nowrap  text-sm font-bold leading-none">
// //                 {position}
// //               </div>
// //               <br />
// //               <div className="flex-auto text-sm my-1">
// //                 <span className="mr-3 inline-flex ">{company}</span>
// //                 <br />
// //                 <span>{location}</span>
               
// //               </div>
// //             </div>
// //             <div class=" flex-1 inline-flex place-items-center pr-3 justify-end">
// //               <div>
// //                 <div className=" text-white m-5 ">{t('mainscreen.Skillmatch')}</div>
// //               </div>
// //               <div class="m-5">
// //                 <svg width="73" height="74" viewBox="0 0 73 74" fill="none" xmlns="http://www.w3.org/2000/svg">
// //                   <svg width="73" height="74" viewBox="0 0 73 74" fill="none" xmlns="http://www.w3.org/2000/svg">
// //                     <path d="M22.2199 42.5918L27.3799 30.8718V29.2518H17.7599V31.3118H24.6799L19.6399 42.5918H22.2199ZM33.8245 42.8318C36.5445 42.8318 38.9445 41.5518 38.9445 39.1518C38.9445 37.4718 37.5645 36.2518 35.9445 35.7118C37.4445 35.2318 38.7245 34.2318 38.7245 32.5518C38.7245 30.0718 36.1845 29.0518 33.8245 29.0518C31.4645 29.0518 28.9245 30.0718 28.9245 32.5518C28.9245 34.2318 30.2045 35.2318 31.7045 35.7118C30.0845 36.2518 28.7045 37.4718 28.7045 39.1518C28.7045 41.5518 31.0845 42.8318 33.8245 42.8318ZM33.8245 34.7718C33.0245 34.6318 31.3045 34.1518 31.3045 32.9118C31.3045 31.7718 32.3845 31.1318 33.8245 31.1318C35.2645 31.1318 36.3445 31.7718 36.3445 32.9118C36.3445 34.1518 34.6445 34.6318 33.8245 34.7718ZM33.8245 40.7518C32.3045 40.7518 31.0845 40.0318 31.0845 38.8518C31.0845 37.4718 32.9845 36.8718 33.8245 36.7518C34.6445 36.8718 36.5645 37.4718 36.5645 38.8518C36.5645 40.0318 35.3045 40.7518 33.8245 40.7518ZM43.6585 35.6718C45.6585 35.6718 46.9785 34.2318 46.9785 32.3718C46.9785 30.4918 45.6585 29.0518 43.6585 29.0518C41.6785 29.0518 40.3385 30.4918 40.3385 32.3718C40.3385 34.2318 41.6785 35.6718 43.6585 35.6718ZM43.6985 42.5918L52.2385 29.2518H50.8785L42.3585 42.5918H43.6985ZM50.8385 42.8318C52.8185 42.8318 54.1585 41.3918 54.1585 39.5318C54.1585 37.6518 52.8185 36.2118 50.8385 36.2118C48.8585 36.2118 47.5185 37.6518 47.5185 39.5318C47.5185 41.3918 48.8585 42.8318 50.8385 42.8318ZM43.6585 34.3318C42.6385 34.3318 41.8985 33.5318 41.8985 32.3718C41.8985 31.1918 42.6385 30.3718 43.6585 30.3718C44.6985 30.3718 45.4385 31.1918 45.4385 32.3718C45.4385 33.5318 44.6985 34.3318 43.6585 34.3318ZM50.8385 41.4918C49.7985 41.4918 49.0585 40.6918 49.0585 39.5318C49.0585 38.3518 49.7985 37.5318 50.8385 37.5318C51.8785 37.5318 52.6185 38.3518 52.6185 39.5318C52.6185 40.6918 51.8785 41.4918 50.8385 41.4918Z" fill="white" />
// //                     <circle cx="36.4519" cy="37.0573" r="34.3112" stroke="#E83363" stroke-width="2.41369" />
// //                     <mask id="path-3-outside-1_0_137" maskUnits="userSpaceOnUse" x="2.39453" y="0" width="71" height="74" fill="black">
// //                       <rect fill="white" x="2.39453" width="71" height="74" />
// //                       <path d="M4.37523 49.4948C3.58363 49.8105 3.19478 50.7099 3.5443 51.4871C5.99179 56.9297 9.76491 61.6823 14.5284 65.304C19.7019 69.2374 25.8486 71.6885 32.3092 72.3943C38.7698 73.1001 45.3006 72.0341 51.2015 69.3106C57.1023 66.587 62.1505 62.3087 65.8048 56.9343C69.4591 51.56 71.5816 45.2923 71.9447 38.8034C72.3078 32.3145 70.8978 25.8492 67.866 20.1007C64.8341 14.3522 60.2948 9.53731 54.7346 6.17242C49.6152 3.07424 43.8082 1.31288 37.8469 1.03801C36.9956 0.99875 36.3023 1.69103 36.2997 2.54326C36.2972 3.39549 36.9864 4.08462 37.8376 4.12734C43.2384 4.39838 48.4966 6.00467 53.1367 8.81277C58.2176 11.8876 62.3657 16.2874 65.1362 21.5404C67.9067 26.7934 69.1951 32.7014 68.8633 38.631C68.5315 44.5605 66.5919 50.2879 63.2527 55.199C59.9134 60.1101 55.3003 64.0197 49.9081 66.5084C44.516 68.9972 38.548 69.9713 32.6443 69.3263C26.7407 68.6813 21.1239 66.4416 16.3963 62.8472C12.0788 59.5646 8.65165 55.2654 6.4138 50.3425C6.06111 49.5667 5.16682 49.1791 4.37523 49.4948Z" />
// //                     </mask>
// //                     <path d="M4.37523 49.4948C3.58363 49.8105 3.19478 50.7099 3.5443 51.4871C5.99179 56.9297 9.76491 61.6823 14.5284 65.304C19.7019 69.2374 25.8486 71.6885 32.3092 72.3943C38.7698 73.1001 45.3006 72.0341 51.2015 69.3106C57.1023 66.587 62.1505 62.3087 65.8048 56.9343C69.4591 51.56 71.5816 45.2923 71.9447 38.8034C72.3078 32.3145 70.8978 25.8492 67.866 20.1007C64.8341 14.3522 60.2948 9.53731 54.7346 6.17242C49.6152 3.07424 43.8082 1.31288 37.8469 1.03801C36.9956 0.99875 36.3023 1.69103 36.2997 2.54326C36.2972 3.39549 36.9864 4.08462 37.8376 4.12734C43.2384 4.39838 48.4966 6.00467 53.1367 8.81277C58.2176 11.8876 62.3657 16.2874 65.1362 21.5404C67.9067 26.7934 69.1951 32.7014 68.8633 38.631C68.5315 44.5605 66.5919 50.2879 63.2527 55.199C59.9134 60.1101 55.3003 64.0197 49.9081 66.5084C44.516 68.9972 38.548 69.9713 32.6443 69.3263C26.7407 68.6813 21.1239 66.4416 16.3963 62.8472C12.0788 59.5646 8.65165 55.2654 6.4138 50.3425C6.06111 49.5667 5.16682 49.1791 4.37523 49.4948Z" fill="#5CA4A9" />
// //                     <path d="M4.37523 49.4948C3.58363 49.8105 3.19478 50.7099 3.5443 51.4871C5.99179 56.9297 9.76491 61.6823 14.5284 65.304C19.7019 69.2374 25.8486 71.6885 32.3092 72.3943C38.7698 73.1001 45.3006 72.0341 51.2015 69.3106C57.1023 66.587 62.1505 62.3087 65.8048 56.9343C69.4591 51.56 71.5816 45.2923 71.9447 38.8034C72.3078 32.3145 70.8978 25.8492 67.866 20.1007C64.8341 14.3522 60.2948 9.53731 54.7346 6.17242C49.6152 3.07424 43.8082 1.31288 37.8469 1.03801C36.9956 0.99875 36.3023 1.69103 36.2997 2.54326C36.2972 3.39549 36.9864 4.08462 37.8376 4.12734C43.2384 4.39838 48.4966 6.00467 53.1367 8.81277C58.2176 11.8876 62.3657 16.2874 65.1362 21.5404C67.9067 26.7934 69.1951 32.7014 68.8633 38.631C68.5315 44.5605 66.5919 50.2879 63.2527 55.199C59.9134 60.1101 55.3003 64.0197 49.9081 66.5084C44.516 68.9972 38.548 69.9713 32.6443 69.3263C26.7407 68.6813 21.1239 66.4416 16.3963 62.8472C12.0788 59.5646 8.65165 55.2654 6.4138 50.3425C6.06111 49.5667 5.16682 49.1791 4.37523 49.4948Z" stroke="#5CA4A9" stroke-width="2" mask="url(#path-3-outside-1_0_137)" />
// //                   </svg>

// //                 </svg>
// //               </div>
// //             </div>
// //           </div>
// //           </div>
      
// //         <div class="footer col-span-12  rounded bg-gray-600 px-10 ">
// //         <div class="flex pt-2 allign-justify text-sm text-gray-400">
// //           <div class="flex-1 inline-flex items-center">
// //             <p class="pl-2"> posted {calculateDaysAgo(date)} days ago </p>

// //             <p class="pl-7"><span>10{t('mainscreen.applicants')}</span></p>
// //           </div>
// //           <div class="  flex-1 inline-flex place-items-center border-white justify-end">
// //             <div>
// //               <button  class="flex-no-shrink bg-teal-600  hover:bg-slate-400  px-5 ml-4 py-2 pl-7 text-xs shadow-sm hover:shadow-lg font-medium tracking-wider mb-2 text-white rounded-full transition ease-in duration-300">{t('mainscreen.apply_now')}</button>
// //             </div>
// //             <div class="pl-2 h-6">
// //             <svg width="22" height="22" viewBox="0 0 22 32" fill="none" xmlns="http://www.w3.org/2000/svg">
// // <path opacity="0.4" d="M21 29L11 21.2222L1 29V4.11111C1 3.28599 1.30102 2.49467 1.83684 1.91122C2.37266 1.32778 3.09938 1 3.85714 1H18.1429C18.9006 1 19.6273 1.32778 20.1632 1.91122C20.699 2.49467 21 3.28599 21 4.11111V29Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
// // </svg>      </div>
// //           </div>
// //         </div>
// //       </div>
// //       </div>

// //     </div>

// //   );

// // }
// // export default Module;
// // message.txt
// // 9 KB