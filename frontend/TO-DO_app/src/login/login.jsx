import "./login.css"
import {motion} from "framer-motion"
function Login_user(){
      const fadeUp = {
  initial: { opacity: 0, scale:0.95 },
  whileInView: { opacity: 1, scale:1 },
  transition: { duration: 0.6 },
  viewport: { once: true, amount:0.3 },
};
return <>
<div className="login_container"> 
    <motion.div {...fadeUp} 
transition={{...fadeUp.transition,duration:0.8}}  className="login_page"> 
        <motion.div {...fadeUp} 
transition={{...fadeUp.transition,duration:0.85}}  className="login_page_grid_1">
            <motion.div {...fadeUp} 
transition={{...fadeUp.transition,duration:0.9}}  className="login_page_logo gradiant_text">SN.</motion.div>
            <motion.div {...fadeUp} 
transition={{...fadeUp.transition,duration:0.95}}  className="login_page_headings">  
                <motion.div {...fadeUp} 
transition={{...fadeUp.transition,duration:1}} >Plan Better.</motion.div>
                <motion.div {...fadeUp} 
transition={{...fadeUp.transition,duration:1.04}} >Finish Faster.</motion.div>
                  </motion.div>
            <motion.div {...fadeUp} 
transition={{...fadeUp.transition,duration:1.08}}  className="login_page_description">
                <motion.div {...fadeUp} 
transition={{...fadeUp.transition,duration:1.12}} >✓ Create & Manage Tasks</motion.div>
                <motion.div {...fadeUp} 
transition={{...fadeUp.transition,duration:1.16}} >✓ Set Task Priorities</motion.div>
                <motion.div {...fadeUp} 
transition={{...fadeUp.transition,duration:1.2}} >✓ Drag & Reorder Tasks</motion.div>
                <motion.div {...fadeUp} 
transition={{...fadeUp.transition,duration:1.24}} >✓ Track Completed Tasks</motion.div>
                <motion.div {...fadeUp} 
transition={{...fadeUp.transition,duration:1.28}} >✓ Secure Personal Workspace</motion.div>
               </motion.div>
        </motion.div>
        <motion.div {...fadeUp} 
transition={{...fadeUp.transition,duration:1.32}}  className="login_page_grid_2">
          
            <motion.div {...fadeUp} 
transition={{...fadeUp.transition,duration:1.36}}  className="login_page_input_content"> Welcome back! Sign in to continue managing your tasks</motion.div>
           <motion.div {...fadeUp} 
transition={{...fadeUp.transition,duration:1.4}}  className="login_page_labels">Full Name</motion.div>
           <motion.div {...fadeUp} 
transition={{...fadeUp.transition,duration:1.44}} > <input type="text" placeholder="name" id="login_name" className="login_page_labels_inputs" /> </motion.div>
             <motion.div {...fadeUp} 
transition={{...fadeUp.transition,duration:1.48}}  className="login_page_labels">Email Address</motion.div>
           <motion.div {...fadeUp} 
transition={{...fadeUp.transition,duration:1.52}} > <input type="email" placeholder="shanawaj@gmail.com" id="login_email" className="login_page_labels_inputs" /> </motion.div>
             <motion.div {...fadeUp} 
transition={{...fadeUp.transition,duration:1.56}}  className="login_page_labels">Password </motion.div>
           <motion.div {...fadeUp} 
transition={{...fadeUp.transition,duration:1.6}} > <input type="password" placeholder="password" id="login_password" className="login_page_labels_inputs" /> </motion.div>
             <motion.div {...fadeUp} 
transition={{...fadeUp.transition,duration:1.64}}  className="login_page_labels">Confirm Password </motion.div>
           <motion.div {...fadeUp} 
transition={{...fadeUp.transition,duration:1.68}} > <input type="text" placeholder="password" id="login_confirm_password" className="login_page_labels_inputs" /> </motion.div>
           <motion.div {...fadeUp} 
transition={{...fadeUp.transition,duration:1.72}}  className="login_page_labels"> <button type="submit" className="login_page_labels_button"> Create Account</button></motion.div>
             <motion.div {...fadeUp} 
transition={{...fadeUp.transition,duration:1.76}}  className="login_page_labels" id="login_output"></motion.div>
        </motion.div>
    </motion.div>
</div>
</>
}
export default Login_user;
