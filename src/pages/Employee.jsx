import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { addEmpAPI, deleteEmpAPI, getAEmpAPI, getAllEmpAPI, updateEmpAPI } from '../services/AllAPI';
import { useEffect } from 'react';


function Employee() {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const[empData,setEmpData]=useState({
    empname:"",
    empDesg:"",
    empSalary:""
  })
  console.log(empData);
  const [allEmployees, setAllEmployees] = useState([]);
const [editEmpData, setEditEmpData] = useState({
  empname: "",
  empDesg: "",
  empSalary: ""
});

  

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  // add employee
   
  const addEmployee = async ()=>{
    try {
      const result =await addEmpAPI(empData)
      console.log(result);
        getAllEmployee()        
    handleClose()  
      
    } catch (error) {
      console.log(error);
      
    }
  }

  //get all employee

  const getAllEmployee = async ()=>{
    try {
      const Allemp =await getAllEmpAPI()
      setAllEmployees(Allemp.data);    
    } catch (error) {
      console.log(error);
      
    }
  }

  //get a employee

  const getAEmployee = async(id)=>{
   try {
      const result = await getAEmpAPI(id)
      console.log(result);  
     setEditEmpData(result.data);
     setShow2(true);   
    } catch (error) {
      console.log(error);     
   }
  }
console.log(editEmpData);

//edit emp

const updateEmployee= async()=>{
  try {
    const result =await updateEmpAPI(editEmpData)
    console.log(result);
    getAllEmployee()     // refresh list
    handleClose2()
    
    
  } catch (error) {
    console.log(error);
    
  }
}

//delete

const handledelete =async(id)=>{
  console.log(id);
  try {
    const result =await deleteEmpAPI(id)
    console.log(result);
    getAllEmployee()
    
  } catch (error) {
    console.log(error);
    
  }
  
}


useEffect(() => {
  getAllEmployee();
}, []);

  return (
    <>
      <div className='container mt-5'>
        <div className='w-100 d-flex justify-content-end'>
          <button onClick={handleShow} className='btn btn-success '>Add Emplpoyee</button>
        </div>
      </div>
     <div className="row mt-5">
  {allEmployees?.map((emp) => (
    <div key={emp._id} className="col-4 p-3">
      <Card style={{ width: '100%' }} className="shadow rounded">
        <Card.Body>
          <p className='fs-4'>Employee Name: {emp.empname}</p>
          <p className='fs-4'>Designation: {emp.empDesg}</p>
          <p className='fs-4'>Salary: {emp.empSalary}</p>
        </Card.Body>
        <div className='d-flex justify-content-around p-3'>
          <button
            onClick={() => {
              // handleShow2();
              getAEmployee(emp._id);
            }}
            className='btn btn-warning'
          >
            Edit
          </button>
          <button onClick={()=>handledelete(emp?._id)} className='btn btn-danger'>Delete</button>
        </div>
      </Card>
    </div>
  ))}
</div>

      {/*modal*/}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className='mb-3'>
            <label htmlFor="">Employee Name</label>
             <input value={empData.empname} onChange={(e)=>setEmpData({...empData,empname:e.target.value})}type="text"  placeholder='employee name' className='form-control'/>
        </div>
          <div className='mb-3'>
            <label htmlFor="">Employee Designation</label>
             <input value={empData.empDesg} type="text" onChange={(e)=>setEmpData({...empData,empDesg:e.target.value})}  placeholder='employee Designation'className='form-control'/>
        </div>
          <div className='mb-3'>
            <label htmlFor="">Employee Salary</label>
             <input value={empData.empSalary} type="text" onChange={(e)=>setEmpData({...empData,empSalary:e.target.value})} placeholder='employee Salary'className='form-control'/>
        </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Clear
          </Button>
          <Button onClick={addEmployee} variant="primary" >
            Add Employee
          </Button>
        </Modal.Footer>
      </Modal>

      {/*Edit modal*/}
      <Modal show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className='mb-3'>
            <label htmlFor="">Employee Name</label>
             <input value={editEmpData.empname} onChange={(e) =>setEditEmpData({ ...editEmpData, empname: e.target.value })} type="text"  placeholder='employee name' className='form-control'/>
        </div>
          <div className='mb-3'>
            <label htmlFor="">Employee Designation</label>
             <input value={editEmpData.empDesg}  onChange={(e) =>setEditEmpData({ ...editEmpData, empDesg: e.target.value })} type="text"  placeholder='employee Designation'className='form-control'/>
        </div>
          <div className='mb-3'>
            <label htmlFor="">Employee Salary</label>
             <input value={editEmpData.empSalary}  onChange={(e) =>setEditEmpData({ ...editEmpData, empSalary: e.target.value })}  type="text"  placeholder='employee Salary'className='form-control'/>
        </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose2}>
            Reset
          </Button>
          <Button onClick={updateEmployee} variant="primary" >
            update Employee
          </Button>
        </Modal.Footer>
      </Modal> //
    </>
  )
}

export default Employee