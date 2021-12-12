import emailjs from 'emailjs-com'; 
const Mailer = () => {
 function sendEmail(e) {
     e.preventDefault();

     emailjs.sendForm(
         "service_nsmle3d",
         "template_xtft6kk",
         e.target,
        "user_RIuFiIQwRSkm3q75jr9Ho"
        ).then(res=>{
        console.log(res);
         
     }).catch(err=> console.log(err));
 }

    return (
        <div className="container border"
        style={{mirginTop:"50px",
        width:"50%",
        
        backgroundPosition: "center",
        backgroundSize: "cover",

        }} 
        >
            <h1 style={{marginTop:"25px"}} >Smtp</h1>
            <form
             onSubmit={sendEmail}
              className="row"
               style={{margin:"25px 85px 75px 100px"}}
                >
                <label>Name</label>
                <input type="text" name="name" className="form-control" />

                <label>E-mail</label>
                <input type="email" name="email" className="form-control" />

                <label>Message</label>
                <textarea name="message" className="form-control" row="5"/>
            <input type="submit" value="Send" className="form-control btn btn-primary"/>
            </form>
        </div>
    );
};

export default Mailer;