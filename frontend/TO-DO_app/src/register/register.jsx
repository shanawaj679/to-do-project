import "./register.css"
import {motion, scale} from "framer-motion"
import { Link } from "react-router-dom";
function Register_user(){
    const fadeUp = {
  initial: { opacity: 0, scale:0.95 },
  whileInView: { opacity: 1, scale:1 },
  transition: { duration: 0.6 },
  viewport: { once: true, amount:0.3 },
};
return <>
<div className="register_container"> 
    <motion.div {...fadeUp} 
transition={{...fadeUp.transition,duration:0.8}} className="register_page"> 
        <motion.div {...fadeUp} 
transition={{...fadeUp.transition,duration:0.85}} className="register_page_grid_1">
            <motion.div {...fadeUp} 
transition={{...fadeUp.transition,duration:0.9}} className="register_page_logo gradiant_text">SN.</motion.div>
            <motion.div {...fadeUp} 
transition={{...fadeUp.transition,duration:0.95}} className="register_page_headings">  
                <motion.div {...fadeUp} 
transition={{...fadeUp.transition,duration:1}}>Plan Better.</motion.div>
                <motion.div {...fadeUp} 
transition={{...fadeUp.transition,duration:1.05}}>Finish Faster.</motion.div>
            </motion.div>
            <motion.div {...fadeUp} 
transition={{...fadeUp.transition,duration:1.1}} className="register_page_description">
                <motion.div {...fadeUp} 
transition={{...fadeUp.transition,duration:1.15}}>✓ Create & Manage Tasks</motion.div>
                <motion.div {...fadeUp} 
transition={{...fadeUp.transition,duration:1.2}}>✓ Set Task Priorities</motion.div>
                <motion.div {...fadeUp} 
transition={{...fadeUp.transition,duration:1.25}}>✓ Drag & Reorder Tasks</motion.div>
                <motion.div {...fadeUp} 
transition={{...fadeUp.transition,duration:1.3}}>✓ Track Completed Tasks</motion.div>
                <motion.div {...fadeUp} 
transition={{...fadeUp.transition,duration:1.35}}>✓ Secure Personal Workspace</motion.div>
            </motion.div>
        </motion.div>
        <motion.div {...fadeUp} 
transition={{...fadeUp.transition,duration:1.4}} className="register_page_grid_2">
          
            <motion.div {...fadeUp} 
transition={{...fadeUp.transition,duration:1.45}} className="register_page_input_content">Create your account to start managing your tasks.</motion.div>
           <motion.div {...fadeUp} 
transition={{...fadeUp.transition,duration:1.49}} className="reg_page_labels">Full Name</motion.div>
           <motion.div {...fadeUp} 
transition={{...fadeUp.transition,duration:1.53}}> <input type="text" placeholder="name" id="reg_name" className="reg_page_labels_inputs" /> </motion.div>
             <motion.div {...fadeUp} 
transition={{...fadeUp.transition,duration:1.57}} className="reg_page_labels">Email Address</motion.div>
           <motion.div {...fadeUp} 
transition={{...fadeUp.transition,duration:1.61}}> <input type="email" placeholder="shanawaj@gmail.com" id="reg_email" className="reg_page_labels_inputs" /> </motion.div>
             <motion.div {...fadeUp} 
transition={{...fadeUp.transition,duration:1.65}} className="reg_page_labels">Password </motion.div>
           <motion.div {...fadeUp} 
transition={{...fadeUp.transition,duration:1.69}}> <input type="password" placeholder="password" id="reg_password" className="reg_page_labels_inputs" /> </motion.div>
             <motion.div {...fadeUp} 
transition={{...fadeUp.transition,duration:1.73}} className="reg_page_labels">Confirm Password </motion.div>
           <motion.div {...fadeUp} 
transition={{...fadeUp.transition,duration:1.77}}> <input type="text" placeholder="password" id="reg_confirm_password" className="reg_page_labels_inputs" /> </motion.div>
           <motion.div {...fadeUp} 
transition={{...fadeUp.transition,duration:1.81}} className="reg_page_labels"> <button type="submit" className="reg_page_labels_button"> Create Account</button></motion.div>
           <motion.div {...fadeUp} 
transition={{...fadeUp.transition,duration:1.85}} className="reg_link_to_login">if you already have an account then <Link className="reg_link" to="/login">Sign In</Link></motion.div>
             <motion.div {...fadeUp} 
transition={{...fadeUp.transition,duration:1.89}} className="reg_page_labels" id="reg_output"></motion.div>
        </motion.div>
    </motion.div>
</div>
</>
}
export default Register_user;
