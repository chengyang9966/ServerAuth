import React,{Component} from 'react';
import {Breadcrumb,BreadcrumbItem, Button, Form, FormGroup, Label, Input, Col,FormFeedback } from 'reactstrap';
import {Link} from 'react-router-dom';


export default class ContactComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            firstName:'',
            LastName:'',
            TelNumber:'',
            email:'',
            agree:false,
            contactType:'Tel.',
            message:'',
            touched:{
                firstName:false,
                LastName:false,
                TelNumber:false,
                email:false,

            }
        }
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleInputChange=this.handleInputChange.bind(this);
        this.handleBlur=this.handleBlur.bind(this);
    }
    handleInputChange(e){
        const target=e.target;
        const value=target.type==='checkbox'? target.checked:target.value;
        const name=target.name;

        this.setState({
            [name]:value
        });
    }
    handleSubmit(e){
        e.preventDefault();
    };
    handleBlur=(field)=>(event)=>{
        this.setState({
            touched:{...this.state.touched,[field]:true}
        })
    };
    validation(firstName,LastName,TelNumber,email){
        const errors={
            firstName:'',
            LastName:'',
            TelNumber:'',
            email:'',
        };
        if(this.state.touched.firstName && firstName.length<3){
            errors.firstName="Fist Name should be more than 3 characters "
        }else if(this.state.touched.firstName && firstName.length >15){
            errors.firstName="Fist Name should be less than 15 characters "
        }
        if(this.state.touched.LastName && LastName.length<2){
            errors.LastName="Last Name should be more than 2 characters "
        }else if(this.state.touched.LastName && LastName.length >10){
            errors.LastName="Last Name should be less than 15 characters "
        }
        const reg =/^\d+$/;
            if(this.state.touched.TelNumber&&!reg.test(TelNumber)){
                errors.TelNumber="Tel number should contain only numbers"
            }
        if(this.state.touched.email&&email.split('').filter(x=>x==='@').length !==1){
            errors.email="email should contain @ sign"
        }
        return errors;
    }   
 
    
    render() {
        const errors=this.validation(this.state.firstName,this.state.LastName,this.state.TelNumber,this.state.email)
        return (
            <div className="container">
            <div className="row">
  <Breadcrumb>
  <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
  <BreadcrumbItem active>Contact Us</BreadcrumbItem>
  </Breadcrumb>
  <div className="col-12">
    <h3>Contact US</h3>
    <hr/>
  </div>
</div>
  <div className="row row-content">
      <div className="col-12">
      <h3>Location Information</h3>
      </div>
      <div className="col-12 col-sm-4 offset-sm-1">
              <h5>Our Address</h5>
              <address>
              121, Clear Water Bay Road<br />
              Clear Water Bay, Kowloon<br />
              HONG KONG<br />
              <i className="fa fa-phone"></i>: +852 1234 5678<br />
              <i className="fa fa-fax"></i>: +852 8765 4321<br />
              <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
              </address>
      </div>
      <div className="col-12 col-sm-6 offset-sm-1">
          <h5>Map of our Location</h5>
      </div>
      <div className="col-12 col-sm-11 offset-sm-1">
          <div className="btn-group" role="group">
              <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
              <a role="button" className="btn btn-info"  href="https://www.skype.com/en/"><i className="fa fa-skype"></i> Skype</a>
              <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
          </div>
      </div>
  </div>
  <div className="row row-content">
      <div className="col-12">
            <h3>Send us Your Feedback</h3>
            <div className="col-12 col-md-9">
      <Form onSubmit={this.handleSubmit}>
          <FormGroup row>
              <Label for="firstName" md={2}>FirstName</Label>
              <Col md={10}>
                  <Input type="text" id="firstname" name="firstName" placeholder="FirstName" valid={errors.firstName===''} invalid={errors.firstName!==''}
                    value={this.state.firstName} onChange={this.handleInputChange} onBlur={this.handleBlur('firstName')}/>
                    <FormFeedback>{errors.firstName}</FormFeedback>
              </Col>
          </FormGroup>
          <FormGroup row>
              <Label for="LastName" md={2}>LastName</Label>
              <Col md={10}>
                  <Input type="text" id="Lastname" name="LastName" placeholder="LastName" valid={errors.LastName===''} invalid={errors.LastName!==''}
                    value={this.state.LastName} onChange={this.handleInputChange} onBlur={this.handleBlur('LastName')}/>
                    <FormFeedback>{errors.LastName}</FormFeedback>
              </Col>
          </FormGroup>
          <FormGroup row>
              <Label for="TelNumber" md={2}>Telephone Number</Label>
              <Col md={10}>
                  <Input type="tel" id="telNumber" name="TelNumber" placeholder="Telephone Number" valid={errors.TelNumber===''} invalid={errors.TelNumber!==''}
                    value={this.state.TelNumber} onChange={this.handleInputChange} onBlur={this.handleBlur('TelNumber')}/>
                    <FormFeedback>{errors.TelNumber}</FormFeedback>
              </Col>
          </FormGroup>
          <FormGroup row>
              <Label for="Email" md={2}>Email</Label>
              <Col md={10}>
                  <Input type="email" id="email" name="email" placeholder="Email Address" valid={errors.email===''} invalid={errors.email!==''}
                    value={this.state.email} onChange={this.handleInputChange} onBlur={this.handleBlur('email')}/>
                    <FormFeedback>{errors.email}</FormFeedback>
              </Col>
          </FormGroup>
          <FormGroup row>
              <Col md={{size:6,offset:2}}>
                  <FormGroup check>
                      <Label check>
                          <Input type="checkbox" name="agree" value={this.state.agree} onChange={this.handleInputChange}/>{''}
                          <strong>May we contact you?</strong>
                      </Label>
                  </FormGroup>
              </Col>
              <Col md={{size:3,offset:1}}>
                  <Input type="select" name="contactType" value={this.state.contactType} onChange={this.handleInputChange}>
                      <option>Tel.</option>
                      <option>Email.</option>
                  </Input>
              </Col>
          </FormGroup>
          <FormGroup row>
              <Label HTMLFor="feedback" md={2}>Your Feedback</Label>
              <Col md={10}>
                  <Input type="textarea" id="feedback" name="message" row="12" 
                    value={this.state.message} onChange={this.handleInputChange}/>
              </Col>
          </FormGroup>
          <FormGroup row>
            <Col md={{size:10,offset:2}}>
                <Button type="submit" color="primary">
                    Send Feedback
                </Button>
            </Col>
          </FormGroup>
          
      </Form>
  </div>
      </div>
  </div>

</div>
        )
    }
}


