import React from 'react'
import submitImg from '../../images/SubmitFormImage.png';
import './styles.css'
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/types';
import axios from 'axios';
interface Form4Props {

}

const Form4: React.FC<Form4Props> = () => {

  const dispatch = useDispatch();
  const form = useSelector((state: RootState) => state.form);

  const formatter = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  
  const formattedDateTime = formatter
    .format(new Date())
    .replace(/\/|, /g, "-")
    .replace(" ", "T");

  const finalData = {
    "full_name": form.name,
    "email": form.email,
    "phone": form.number,
    "company": form.companyName,
    "intrested_services": form.selectedService,
    "budget": form.projectBudget,
    "requested_at": formattedDateTime,
  }

  const bearerToken: string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImJvYkBwYWt0b2x1cy5jb20iLCJuYW1laWQiOiJhYTgzOTQyNS00OWU4LTQwNzItOGJlNC0yMDQ5MDU4YzYwOGQiLCJnaXZlbl9uYW1lIjoiQm9iIiwiZmFtaWx5X25hbWUiOiJBbmFzb3JpIiwidXNlcl92aWV3X2FjY2Vzc190eXBlIjoiRGVhbGVyIiwicm9sZSI6WyJEZWFsZXIiLCJWaWV3IEludm9pY2UiLCJTYXZlIFF1b3RlcyIsIkVkaXQgTWFya3VwIiwiVmlldyBSZW1pdHRhbmNlIiwiTWFuYWdlIEFDSCBJbmZvcm1hdGlvbiIsIkNhbmNlbCBDb250cmFjdCIsIlZvaWQgQ29udHJhY3RzIiwiVmlldyBSZXRhaWwgUHJpY2UgTGltaXRzIiwiRWRpdCBSZXRhaWwgUHJpY2UgTGltaXRzIiwiUGF5IFJlbWl0dGFuY2UiLCJFbnRlciBDb250cmFjdCIsIlByb2Nlc3MgUXVvdGVzIiwiU2FsZXMgQXNzb2NpYXRlcyIsIlZpZXcgTWFya3VwIl0sInNpZ25faW4iOiJtZmEiLCJuYmYiOjE2OTgwNTQ1MjYsImV4cCI6MTY5ODE0MDkyNiwiaWF0IjoxNjk4MDU0NTI2LCJpc3MiOiJodHRwczovL3pvb20tc3RhZ2UuYWxwaGF3YXJyYW50eS5jb20iLCJhdWQiOiJodHRwczovL3pvb20tc3RhZ2UuYWxwaGF3YXJyYW50eS5jb20ifQ._6DP-RHaxKa0PYP4DSIZLkJYYggfcHNGm68VMggWV9E";
  const apiURL: string = "https://aw-test.free.beeceptor.com/api/v1/lead/save";

  const submitButtonHandler = async () => {
    try {
      const response = await axios.post(apiURL, finalData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${bearerToken}`,
        },
      });

      console.log("Success:", response.data);
      return response;
    } catch (error: any) {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
      throw error;
    }
  }


  return (
    <div className='form4'>
      <img src={submitImg} alt="" width={100} />
      <div className='textclass'>
        <h2>Submit your quote request</h2>
        <p>Please review all the information you previously typed in the past steps, and if all is okay, submit your message to receive a project quote in 24 - 48 hours.</p>
      </div>
      <Button
        text='Submit'
        onClick={submitButtonHandler}
      ></Button>
    </div>

  )
}

export default Form4



// "data": {
//   "full_name" : "",
//   "email" : "animesh@test.com",
//   "phone" : "",
//   "company" : "",
//   "intrested_services" :"",
//   "budget" : "",
//   "requested_at": "",
//   }