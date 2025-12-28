import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';


function Employee() {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const[empData,setEmpData]=useState({
    empname:"",
    empDesg:"",
    empsalary:""
  })
  console.log(empData);
  

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
  return (
    <>
      <div clasName='container mt-5'>
        <div className='w-100 d-flex justify-content-end'>
          <button onClick={handleShow} className='btn btn-success '>Add Emplpoyee</button>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-4 p-3 shadow rounded">
          <Card style={{ width: '100%' }}>
            <Card.Body>
              <p className='fs-4'>Employee Name:Athul</p>
              <p className='fs-4'>Designation:Developer</p>
              <p className='fs-4'>Salary:500000</p>
            </Card.Body>
            <div className='d-flex justify-content-around p-3'>
              <button onClick={handleShow2} className='btn btn-warning'>Edit</button>
              <button className='btn btn-danger'>Delete</button>

            </div>
          </Card>
        </div>
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
             <input value={empData.empDesg} type="text" onChange={(e)=>setEmpData({...empData,empname:e.target.value})}  placeholder='employee Designation'className='form-control'/>
        </div>
          <div className='mb-3'>
            <label htmlFor="">Employee Salary</label>
             <input value={empData.empsalary} type="text" onChange={(e)=>setEmpData({...empData,empname:e.target.value})} placeholder='employee Salary'className='form-control'/>
        </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Clear
          </Button>
          <Button variant="primary" >
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
             <input type="text"  placeholder='employee name' className='form-control'/>
        </div>
          <div className='mb-3'>
            <label htmlFor="">Employee Designation</label>
             <input type="text"  placeholder='employee Designation'className='form-control'/>
        </div>
          <div className='mb-3'>
            <label htmlFor="">Employee Salary</label>
             <input type="text"  placeholder='employee Salary'className='form-control'/>
        </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Reset
          </Button>
          <Button variant="primary" >
            update Employee
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Employee