<?php 
class Liveappmodel extends CI_Model{
	public function checkUserLogin($username,$password){
		$a=$this->db->select("*");
		$this->db->where('u_name',$username);
		$this->db->where("u_pass",$password);
		//$this->db->where("is_delete",'1');
		return $this->db->get("cosmos_users")->result_array();
	}
	public function generate_code($length = 6) {
        $chars = '0123456789';
        $str = '';
        $max = strlen($chars) - 1;
        for ($i = 0; $i < $length; $i++)
        $str .= $chars[mt_rand(0, $max)];
        return $str;
    }
	public function smssend($mobile, $message) { 
        $request = "workingkey=925q80p73670k1v1ij7i8yzx2pliqk8o&sender=CosMos&to=" . $mobile . "&message=" . $message;
        $ch = curl_init('http://alerts.prioritysms.com/api/web2sms.php');
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $request);
        $resuponce = curl_exec($ch);
        curl_close($ch);
        return $resuponce;
    }
	public function getDPOList($uid,$session_ulevel,$where,$session_department,$searchwhere='NULL'){
		/*if($session_ulevel==1){
			$u_id='';
		}else{
			$u_id = $uid;
			$this->db->where('cd.u_id',$u_id);
		}
		
		$sel=$this->db->select('cd.cs_id,cd.u_id,cs.cs_id,cs.l_id,cs.cs_process_status,cs.cs_invoice_name,cs.cs_delete,cdo.csd_contact_mobile');
        $this->db->from('tbl_customer as cs');
        $this->db->join('tbl_customer_dpoassign cd', 'cs.cs_id = cd.cs_id', 'left');
		$this->db->join('tbl_customer_detailorder cdo', 'cdo.cs_id = cs.cs_id', 'left');
		$this->db->group_by('l_id');
		$this->db->order_by('cs.cs_id','DESC');
		$this->db->where($where);
		//$this->db->where('cd.u_id',$uid);
        return $this->db->get()->result_array();
		*/
		// --------------- NEW CHANGE ON 17-10-2019 -------------------------- //
		if($session_department=='All' || $session_department=='Marketing'){
			$u_id = "";
		}else{
			$u_id = $uid;
			$this->db->select('dp.u_id,dp.cs_id'); //cd.cs_id,cd.u_id,
			$this->db->join('tbl_customer_dpoassign dp', 'dp.cs_id = cs.cs_id', 'left');
			$this->db->where('dp.u_id',$u_id);
			// && $session_ulevel == 1			
			if($session_ulevel == 1){
				//$this->db->where_in('u_level',array('2','3','4','5'));
				$this->db->where('dp.assing_type','HD'); 
			}else{
				//$this->db->where('dp.assing_type','OP');
				$this->db->where('dp.csd_id !=','');
			}		
		}
		if($searchwhere!='NULL'){
			$this->db->where($searchwhere);
		}
		/**/
		$sel=$this->db->select('ln.l_name,ct.city_name,cs.cs_city,cs.cs_location,cs.cs_id,cs.l_id,cs.cs_process_status,cs.cs_invoice_name,cs.cs_delete');
        $this->db->join('tbl_lead_location ln', 'ln.l_id = cs.cs_location', 'left');
        $this->db->join('tbl_city_erp ct', 'ct.c_id = cs.cs_city', 'left');
		$this->db->group_by('l_id');
		$this->db->order_by('cs.cs_id','DESC');
		$this->db->where($where);
        return $this->db->get('tbl_customer as cs')->result_array();
		echo "<pre>";print_r($sel);echo "</pre>";
	}
	public function dpo_list_verticle($where,$session_ulevel,$session_department,$uid){
		if($session_department=='Operation'){
			$u_id = $uid;
			$this->db->select('cd.u_id,cd.cs_id'); 
			$this->db->join('tbl_customer_dpoassign cd', 'cd.csd_id = csd.csd_id', 'left');
			$this->db->where('cd.u_id',$u_id);
			if($session_ulevel== 1){
				$this->db->where('cd.assing_type','HD'); 
			}
			$this->db->where('cd.csd_id !=','');			
		}
		$sel=$this->db->select('csd.csd_id,csd.csd_verticle,csd.csd_contact_mobile');
        //$this->db->where('csd.cs_id',$cs_id);
		//$this->db->where('csd.qutn_type',$qutn_type);
		$this->db->where($where);
		$this->db->where('csd.csd_delete',1);
		$this->db->group_by('csd.csd_id');
        return $this->db->get('tbl_customer_detailorder as csd')->result_array();
	}
	public function checkMobileNo($cand_id,$primary_mob){
		$this->db->select("*");
		$this->db->from("tbl_candidate");
		$this->db->where('cand_mobile', $primary_mob);
		$this->db->where('cand_mobile !=', "");
		$this->db->where_not_in('cand_id', $cand_id);
		return $cndData_mob = $this->db->get()->result_array();
	}
	public function getCollarBlue($type){
		$this->db->select("*");
        $this->db->from("tbl_pos_category");
        $this->db->where("collor_type", $type);
        return $data = $this->db->get()->result_array();		
	}
	public function getCollarWhite($type){
		$this->db->select("*");
        $this->db->from("tbl_pos_category");
        $this->db->where("collor_type", $type);
        return $data = $this->db->get()->result_array();		
	}
	public function getPosit($type){
		$this->db->select("*");
		$this->db->from("tbl_quot_verticle_design");
		$where = '(collor_type="' . $type . '" or collor_type = "BOTH")';
		$this->db->where($where);
		return $pos = $this->db->get()->result_array();
	}
	public function customer_detail_list($id){
		$where = array('a.l_id' => $id);
        $this->db->select('a.* , b.reference , CONCAT(c.fname , " " , c.lname) as name ,CONCAT(c3.fname , " " , c3.lname) as assigned_name , CONCAT(c2.fname , " " , c2.lname) as modified_name  , d.stage_name , e.industies_name, f.l_name,a.contact_no', false);
        $this->db->from('tbl_leads a');
        $this->db->where($where);
        $this->db->join('tbl_lead_reference b', 'b.r_id = a.refrence_source_id', 'left');
        $this->db->join('cosmos_users c', 'c.u_id = a.lead_created_by', 'left');
        $this->db->join('cosmos_users c2', 'c2.u_id = a.lead_modified_by', 'left');
        $this->db->join('cosmos_users c3', 'c3.u_id = a.lead_assigned_to', 'left');
        $this->db->join('tbl_lead_callstage d', 'd.s_id = a.callstage_id', 'left');
        $this->db->join('tbl_lead_industries e', 'e.i_id = a.industry_id', 'left');
        $this->db->join('tbl_lead_location f', 'f.l_id = a.location', 'left');
        $data = $this->db->get()->row_array();
        $vrts = explode("|", $data['verticle']);
        $this->db->select('GROUP_CONCAT(a.vertical_name) AS verticles');
        $this->db->from('tbl_lead_verticle a');
        $this->db->where_in('v_id', $vrts);
        $res = $this->db->get()->row();
        $data['verticle_names'] = $res->verticles;
        return $data;
	}
	public function get_custom_data($u_id,$cs_id,$session_ulevel){
		if($u_id != "NULL"){
            $this->db->select('cd.cs_id,cd.u_id');
			$this->db->join('tbl_customer_dpoassign cd', 'cd.csd_id = csd.csd_id', 'left');
			if($session_ulevel == 1){
				$this->db->where('cd.assing_type','HD'); 
			}
			$this->db->where('cd.u_id',$u_id);
        }
		$sel2=$this->db->select('csd.*,cs.cs_prepared_by,CONCAT(cu.fname, " ", cu.lname) AS createdName');  	
		$this->db->join('tbl_customer cs', 'cs.cs_id = csd.cs_id', 'left');
		$this->db->join('cosmos_users cu', 'cu.u_id = cs.cs_prepared_by', 'left');
		$this->db->where('csd.cs_id',$cs_id);
		$this->db->where('csd.qutn_type','custom');
		$this->db->where('csd.csd_delete',1);
		$this->db->group_by('csd_id');
		return $this->db->get('tbl_customer_detailorder as csd')->result_array();
	}
	public function get_lumsum_data($u_id,$cs_id,$session_ulevel){
		if($u_id != "NULL"){
            $this->db->select('cd.cs_id,cd.u_id');
			$this->db->join('tbl_customer_dpoassign cd', 'cd.csd_id = csd.csd_id', 'left');
			if($session_ulevel == 1){
				$this->db->where('cd.assing_type','HD'); 
			}
			$this->db->where('cd.u_id',$u_id);
        }
		$sel2=$this->db->select('csd.*,cs.cs_prepared_by,CONCAT(cu.fname, " ", cu.lname) AS createdName');  	
		$this->db->join('tbl_customer cs', 'cs.cs_id = csd.cs_id', 'left');
		$this->db->join('cosmos_users cu', 'cu.u_id = cs.cs_prepared_by', 'left');
		$this->db->where('csd.cs_id',$cs_id);
		$this->db->where('csd.qutn_type','lumsum');
		$this->db->where('csd.csd_delete',1);
		$this->db->group_by('csd_id');
		return $this->db->get('tbl_customer_detailorder as csd')->result_array();		
	}
	public function get_place_data($u_id,$cs_id,$session_ulevel){
		if($u_id != "NULL"){
            $this->db->select('cd.cs_id,cd.u_id');
			$this->db->join('tbl_customer_dpoassign cd', 'cd.csd_id = csd.csd_id', 'left');
			if($session_ulevel == 1){
				$this->db->where('cd.assing_type','HD'); 
			}
			$this->db->where('cd.u_id',$u_id);
        }
		$sel2=$this->db->select('csd.*,cs.cs_prepared_by,CONCAT(cu.fname, " ", cu.lname) AS createdName');  	
		$this->db->join('tbl_customer cs', 'cs.cs_id = csd.cs_id', 'left');
		$this->db->join('cosmos_users cu', 'cu.u_id = cs.cs_prepared_by', 'left');
		$this->db->where('csd.cs_id',$cs_id);
		$this->db->where('csd.qutn_type','placement');
		$this->db->where('csd.csd_delete',1);
		$this->db->group_by('csd_id');
		return $this->db->get('tbl_customer_detailorder as csd')->result_array();
	}
	public function CandData($cs_id){
		$this->db->select("a.* ,b.cand_fname, b.cand_lname");
        $this->db->where('a.cs_id', $cs_id);
        $this->db->where('a.i_status', 4);
        $this->db->where('a.int_joineedate !=', NULL);
        $this->db->join('tbl_candidate b', 'b.cand_id = a.cand_id', 'left');
        $this->db->group_by('a.cand_id');
        return $this->db->get("tbl_candidate_company a")->result_array();
	}
	public function getCustromerOrder($csd_id){
		$this->db->select('a.*,b.b_name,DATE_FORMAT(a.csd_pay_to_emp_date,"%d-%m-%Y") as csd_pay_to_emp_date,DATE_FORMAT(a.csd_period_from,"%d-%m-%Y") as csd_period_from,DATE_FORMAT(a.csd_deployment_wef,"%d-%m-%Y") as csd_deployment_wef,DATE_FORMAT(a.csd_period_to,"%d-%m-%Y") as csd_period_to');
        $this->db->from('tbl_customer_detailorder a');
        $this->db->where('csd_id',$csd_id); 
		$this->db->join('cosmos_branch b', 'b.b_id = a.b_id', 'left');
		return $Page_data = $this->db->get()->result_array();
	}
	public function CustdetOrder($where){
		$this->db->select("*,DATE_FORMAT(csd_create_date,'%d-%m-%Y') as csd_create_date");		
		$this->db->where($where);
		return $this->db->get("tbl_customer_detailorder")->result_array();
	}
	public function getQuoteVerticles($where,$selectdata,$table){
		$sel = $this->db->select("vd.designation");
		$this->db->select($selectdata);
        $this->db->from($table);
        $this->db->where($where);
		$this->db->join('tbl_quot_verticle_design vd', 'vd.vd_id = cn.des_id', 'left');
        return $resultverticles = $this->db->get()->result_array();
	}
	public function getDPOPlacementData($where){
		$this->db->select('a.*,b.b_name');
        $this->db->where($where);
		$this->db->join('cosmos_branch b', 'b.b_id = a.b_id', 'left');
		return $Pco_detail = $this->db->get('tbl_customer_detailorder as a')->result_array();
	}	
	public function getEmailMobile($email,$primary_mobile_number){
		$this->db->select("*");
		$this->db->where("(cand_email='$email' AND cand_email != ''  OR cand_mobile='$primary_mobile_number')");		
		return $this->db->get('tbl_candidate')->result_array();
	}
	public function maxdata($maxfield,$table,$where){
        $a=$this->db->select("*,MAX(`$maxfield`) as $maxfield");
		if($where!='NULL'){
			$this->db->where($where);
		}
        return $this->db->get($table)->result_array();
    }
	public function provisionalList($uid,$session_ulevel,$searchwhere='NULL'){
		if($session_ulevel==1){
			$u_id='';
			$where=array();			
		}else{
			$u_id=$uid;
			$where = array(
				"created_by"=>$u_id,					
			);
		}
		if($searchwhere!='NULL'){
			$this->db->where($searchwhere);
		}
		$a=$this->db->select("c.*,CONCAT(cr.fname, ' ', cr.lname ) AS createname");
		$this->db->join("cosmos_users as cr", "cr.u_id = c.created_by", 'left');
		$this->db->where($where);
		//$this->db->where('c.reg_type','PROVISIONAL');
		$this->db->where('cand_reg_from','fo');
		$this->db->order_by("cand_id","DESC");
		return $this->db->get("tbl_candidate as c")->result_array();
		echo "<pre>";print_r($a);echo "</pre>";
	}
	public function get_last_intstatus($cand_id){
		$sel=$this->db->select('cm.int_date_time,cm.int_joineedate,cm.cand_cmp_id,cm.cs_id,cm.i_status,st.i_status,st.status_hindi');
        $this->db->where('cm.cand_id',$cand_id);
		$this->db->join('tbl_interview_status st', 'st.i_id = cm.i_status', 'left');
        return $this->db->get('tbl_candidate_company as cm')->result_array();
	}
	public function emailSendFormat($emailID, $sub, $msg_send, $regard = 'MyCosmosJobs', $topmenu = 'NULL') {
        $msg = '';
        $msg.="<div style='font-size:13px;'><div class='main-head' style='background: #034173;color: #E4E4E4;padding: 5px;text-align: right;'><span>";
        //<a style='text-decoration: none !important;color:#FFF;' href='".base_url()."company'>Login</a> |
        if ($topmenu == "company") {
            $msg.="<a style='text-decoration: none !important;color:#FFF;' href='" . base_url() . "company'>Login</a> | ";
        } elseif ($topmenu == 'candidate') {
            $msg.="<a style='text-decoration: none !important;color:#FFF;' href='" . base_url() . "welcome/candidateLoginPage'>Login</a> | ";
        } else {
            $msg.="";
        }
		$base_url1='https://www.mycosmosjobs.com';
        $msg.="<a style='text-decoration: none !important;color:#FFF;' href='" . base_url() . "'>MyCosmosJob</a></span></div><div class='logo-head' style='border-top: 1px solid #034173;border-bottom: 1px solid #E0E0E0;border-left: 1px solid #034173;border-right: 1px solid #034173;'><img src='".$base_url1."/images/joblogo1.png' class='img-rounded' alt='Logo' style='width: 120px;padding:1%;'></div><div class='data' style='border-bottom: 3px solid #034173;border-left: 1px solid #034173;border-right: 1px solid #034173;padding:1%;background:#E7F3FD;color:#333;'>
		<!----------- Start: content -------------->";
        $msg.=$msg_send;
        if ($regard != 'NULL') {
            $msg.="<!----------- END: content -------------->
					<p style='margin-top:60px;color:#333;'>Regards,<br />
					" . $regard . "</p>";
        }
        $msg.="</div>
		</div>";
        //echo $msg;
        $SEND_EMAIL = $this->emailsend($emailID, $sub, $msg);
        //$SEND_EMAIL_my=$this->emailsend('nikita.prajapati@staroneweb.co.in',$sub,$emailID."=>".$msg);
    }
	public function emailsend($to, $sub, $msg, $attach = "NULL") {

        require_once(APPPATH . 'third_party/phpmailer/class.phpmailer.php');
        require_once(APPPATH . 'third_party/phpmailer/class.smtp.php');
        $query_data = $this->db->get('email_setting')->row_array();
        $host = $query_data['host'];
        $username = $query_data['username'];
        $password = $query_data['password'];
        $from_name = $query_data['from_name'];
        $from_noreply_email = $query_data['from_noreply_email'];
        $smtp_secure = $query_data['smtp_secure'];
        $port = $query_data['port'];
        try {
            $mail = new PHPMailer(true); //New instance, with exceptions enabled
            $mail->AddAddress($to);
            $mail->IsSMTP();                           // tell the class to use SMTP
            $mail->SMTPAuth = true;                  // enable SMTP authentication
            $mail->SMTPSecure = 'ssl';
            $mail->Port = 465;                    // set the SMTP server port
            $mail->Host = "smtp.gmail.com"; // SMTP server
            $mail->Username = "noreply.mycosmosjobs@gmail.com";     // SMTP server username
            $mail->Password = "12mycosmos34#$";            // SMTP server password
            $mail->From = "noreply.mycosmosjobs@gmail.com";
            $mail->FromName = "MYCOSMOSJOBS";
//            $mail->AddAddress('vishal.panara@staroneweb.co.in');

            $mail->Subject = $sub;
            $mail->WordWrap = 80; // set word wrap
            $mail->MsgHTML($msg);
            if ($attach != "NULL") {
                $mail->AddAttachment($attach);
            }
            $mail->IsHTML(true); // send as HTML
//            $mail->SMTPDebug = 2;
            $sentmail = $mail->Send();
            $mail->Timeout = 3600;

            // echo "<meta HTTP-EQUIV='REFRESH' content='0; url=../upload_resume.php?task=sent'>";
        } catch (phpmailerException $e) {
            $e->errorMessage();
        }
    }
	public function getFeedbacks($session_ulevel,$uid,$searchwhere='NULL'){
		/*if($session_ulevel==1){
			$u_id='';
		}else{ 
			$u_id = $uid;			
			$this->db->select('cd.cs_id,cd.u_id');
			$this->db->where('cd.u_id',$u_id);
			$this->db->join('tbl_customer_dpoassign cd', 'cd.cs_id = cs.cs_id', 'left');
		}
		$a=$this->db->select('fb.*,cs.cs_invoice_name,cs.cs_id,DATE_FORMAT(fb.fb_date,"%d-%m-%Y") as fb_date');
        $this->db->join('tbl_customer cs', 'cs.cs_id = fb.cs_id', 'left');
        $this->db->get('tbl_company_feedback fb')->result_array();
		echo "<pre>";print_r($a);echo "</pre>";*/
		if($session_ulevel == 1){
			$u_id = '';
			$op_where = array(
				"assing_type"=>"OP"
			);
		}else{
			$u_id = $uid;
			$op_where = array(
				"u_id"=>$u_id,
				"assing_type"=>"OP"
			);
		}
		
		$sel2=$this->db->select('cs_id');
		$this->db->from('tbl_customer_dpoassign');
		$this->db->where($op_where);
		$this->db->group_by('cs_id');
		$assign_cmpy = $this->db->get()->result_array();
			//return $assign_cmpy;
		for($c=0; $c<count($assign_cmpy); $c++){ 
			$cmid=$assign_cmpy[$c]['cs_id'];
			if($session_ulevel == 3 || $session_ulevel == 4 || $session_ulevel == 5){
				$this->db->or_where('cs.cs_id',$cmid);
			}
		}
		if($searchwhere!='NULL'){
	 		$this->db->where($searchwhere);
		}
        $sel=$this->db->select('fb.*,cs.cs_invoice_name,cs.cs_id,DATE_FORMAT(fb.fb_date,"%d-%m-%Y") as fb_date');
        $this->db->join('tbl_customer cs', 'cs.cs_id = fb.cs_id', 'left');
        return $this->db->get('tbl_company_feedback fb')->result_array();
	}
	public function getFieldVisits($where,$order,$session_ulevel){
		if($session_ulevel == 1) {
			$u_id = '';
		}else{
			$u_id = $loginData['u_id'];
			$this->db->where('cd.u_id',$u_id);
		}
		$sel=$this->db->select('cd.cs_id,cd.u_id,ln.l_name,ct.city_name,cs.cs_city,cs.cs_location,cs.cs_id,cs.l_id,cs.cs_process_status,cs.cs_invoice_name,cs.cs_delete,CONCAT(cu.fname , " " , cu.lname) as created_name');
		$this->db->where($where);
        $this->db->join('tbl_customer_dpoassign cd', 'cs.cs_id = cd.cs_id', 'left');
        $this->db->join('tbl_lead_location ln', 'ln.l_id = cs.cs_location', 'left');
        $this->db->join('tbl_city_erp ct', 'ct.c_id = cs.cs_city', 'left');
        $this->db->join('cosmos_users cu', 'cu.u_id = cd.u_id', 'left');
		$this->db->group_by('l_id');
		$this->db->order_by($order);
        return $this->db->get('tbl_customer as cs')->result_array();
	}
	public function getFeedBackDets($fb_id){
		$this->db->select("cf.*,c.*");
		$this->db->where("cf.fb_id",$fb_id);
		$this->db->where("c.cs_process_status",'customer');
		$this->db->join("tbl_customer as c",'c.cs_id = cf.cs_id','left');
		return $this->db->get("tbl_company_feedback cf")->result_array();
	}
	public function listInterView($where,$uid,$session_ulevel,$order,$searchwhere='NULL',$session_department){
		/*if($session_ulevel == 1) {			
			$u_id = '';			
			$op_where=array(
				"assing_type"=>"OP"
			);
		}else{
			$u_id = $uid;			
			$op_where = array(
				"u_id"=>$u_id,
				"assing_type"=>"OP"
			);
		}*/
		/*if($session_ulevel==1){
			$u_id='';
			$op_where=array(
				"assing_type"=>"OP"
			);
		}else{
			$u_id = $uid;			
			$op_where = array(
				"u_id"=>$u_id,
				"assing_type"=>"OP"
			);
			$this->db->select('cd.cs_id,cd.u_id');
			$this->db->where('cd.u_id',$u_id);
			$this->db->join('tbl_customer_dpoassign cd', 'cd.cs_id = cm.cs_id', 'left');
		}
		if($searchwhere!='NULL'){
			$this->db->where($searchwhere);
		}
		$sel=$this->db->select('cs.cs_id,cs.cs_invoice_name,cm.*');
		$this->db->join('tbl_customer cs', 'cs.cs_id = cm.cs_id', 'left');
		$this->db->where($where);
		$this->db->where('cm.i_status !=',4);
		$this->db->where('cm.i_status !=','NULL');
		$this->db->where('cm.i_status !=',0);
		$this->db->group_by('cs.cs_id');
		$this->db->order_by($order);
        return $result = $this->db->get('tbl_candidate_company as cm')->result_array(); */
		
		
		
		if($session_department=='All' || $session_department=='Marketing'){
			$u_id = "";
		}else{
			$u_id = $uid;
			$this->db->select('cd.u_id'); 
			$this->db->join('tbl_customer_dpoassign cd', 'cd.cs_id = cm.cs_id', 'left');
			$this->db->where('cd.u_id',$u_id);
			if($session_ulevel == 1){
				$this->db->where('cd.assing_type','HD'); 
			}else{
				$this->db->where('cd.csd_id !=','');
			}
		}
		if($searchwhere!='NULL'){
			$this->db->where($searchwhere);
		}
		$sel=$this->db->select('cs.cs_id,cs.cs_invoice_name,cm.*');
		$this->db->join('tbl_customer cs', 'cs.cs_id = cm.cs_id', 'left');
        $this->db->where('cm.i_status !=',4);
        $this->db->where('cm.i_status !=','NULL');
        $this->db->where('cm.i_status !=',0);
		$this->db->group_by('cs.cs_id');
		$this->db->order_by($order);
        return $result = $this->db->get('tbl_candidate_company as cm')->result_array();
		
		/*$sel2=$this->db->select('cs_id');
		$this->db->where($op_where);
		$this->db->group_by('cs_id');
        $assign_cmpy = $this->db->get('tbl_customer_dpoassign')->result_array();		
		for($c=0; $c<count($assign_cmpy); $c++){ 
			 $cmid=$assign_cmpy[$c]['cs_id'];
			if($session_ulevel == 3 || $session_ulevel == 4 || $session_ulevel == 5){
				$this->db->or_where('cm.cs_id',$cmid);
			}
		}*/
		/*$sel=$this->db->select('cs.cs_id,cs.cs_invoice_name,cm.*');
        $this->db->where('cm.i_status !=','NULL'); 
		$this->db->where($where); 		
		$this->db->where('cm.i_status !=',4);
        $this->db->where('cm.i_status',0);
		$this->db->group_by('cs.cs_id');
		$this->db->order_by($order);
        $this->db->join('tbl_customer cs', 'cs.cs_id = cm.cs_id', 'left');		
         $result = $this->db->get('tbl_candidate_company as cm')->result_array();*/
		 
		
			  
		echo "<pre>";print_r($sel);echo "</pre>";
	}
	public function interview_list_status($cs_id){
		$where=array(
			'cs_id' => $cs_id,
			'i_status !=' => 4,
			'i_status !=' => 'NULL',
			'i_status !=' => 0,
		);
		
		$sel=$this->db->select('MAX(cand_cmp_id) as cmpid,cs_id');
		$this->db->where($where);
		$this->db->group_by('cand_id');
        $count = $this->db->get('tbl_candidate_company')->result_array();
		$cmp_array=array();
		for($h=0; $h<count($count); $h++){
			$cmp_array[]=$count[$h]['cmpid']; 
		}
		/*$selvv=$this->db->select('ic.*,cn.cand_id,st.i_status,cn.cand_fname,cn.cand_lname,cn.cand_dob,cn.cand_mobile,vd.designation');
		$this->db->where('ic.cs_id',$cs_id);
		$this->db->where_in('ic.cand_cmp_id',$cmp_array);
		$this->db->where('ic.i_status !=',4);
		$this->db->join('tbl_candidate cn', 'cn.cand_id = ic.cand_id', 'left');
        $this->db->join('tbl_interview_status st', 'st.i_id = ic.i_status', 'left');
		$this->db->join('tbl_customer cs', 'cs.cs_id = ic.cs_id', 'left');
		$this->db->join('tbl_quot_verticle_design vd', 'vd.vd_id = ic.fk_pn_id', 'left');
		$this->db->order_by('cand_cmp_id','DESC');
        return $dataresult=$this->db->get('tbl_candidate_company as ic')->result_array();*/
		$selvv=$this->db->select('cc.cand_cmp_id,cc.cs_id,cc.cand_id,cc.i_status,DATE_FORMAT(cc.int_date_time,"%d-%m-%Y %h:%i:%s") as int_date_time,cc.reason,st.i_status,cs.cs_invoice_name,cn.cand_fname,cn.cand_lname,DATE_FORMAT(cn.cand_dob,"%d-%m-%Y") as cand_dob,vd.designation,cn.cand_mobile');
		$this->db->where('cc.cs_id',$cs_id);
		$this->db->where_in('cc.cand_cmp_id',$cmp_array);
		$this->db->join('tbl_candidate cn', 'cn.cand_id = cc.cand_id', 'left');
        $this->db->join('tbl_interview_status st', 'st.i_id = cc.i_status', 'left');
		$this->db->join('tbl_customer cs', 'cs.cs_id = cc.cs_id', 'left');
		$this->db->join('tbl_quot_verticle_design vd', 'vd.vd_id = cc.fk_pn_id', 'left');
		$this->db->order_by('cand_cmp_id','DESC');
        return $this->db->get('tbl_candidate_company as cc')->result_array();
		echo "<pre>";print_r($selvv);echo "</pre>";
	}
	public function selectedCandis($uid,$session_ulevel,$where,$searchwhere='NULL',$session_department){
		/*if($session_ulevel == 1) {			
            $u_id = '';			
			$op_where = array(
				"assing_type"=>"OP"
			);
		}else{
			$u_id = $uid;			
			$op_where = array(
				"u_id"=>$uid,
				"assing_type"=>"OP"
			);
		}
		$sel2=$this->db->select('cs_id');
		$this->db->where($op_where);
		$this->db->group_by('cs_id');
        $assign_cmpy = $this->db->get('tbl_customer_dpoassign')->result_array();
		
		for($c=0; $c<count($assign_cmpy); $c++){ 
			$cmid=$assign_cmpy[$c]['cs_id'];
			if($session_ulevel == 3 || $session_ulevel == 4 || $session_ulevel == 5){
				$this->db->or_where('cm.cs_id',$cmid);
			}
		}*/
		/*if($session_ulevel==1){
			$u_id='';
		}else{
			$u_id = $uid;			
			$this->db->select('cd.cs_id,cd.u_id');
			$this->db->where('cd.u_id',$u_id);
			$this->db->join('tbl_customer_dpoassign cd', 'cd.cs_id = cm.cs_id', 'left');
		}
		if($searchwhere!='NULL'){
			$this->db->where($searchwhere);
		}
		$sel=$this->db->select('cs.cs_id,cs.cs_invoice_name,cm.int_joineedate,cm.cand_cmp_id,cm.cs_id');
        $this->db->where('cm.i_status',4);
		$this->db->where($where); 
		$this->db->group_by('cm.cs_id');
		$this->db->order_by('cs.cs_id','DESC');
        $this->db->join('tbl_customer cs', 'cs.cs_id = cm.cs_id', 'left');
        return $result = $this->db->get('tbl_candidate_company as cm')->result_array();	
		echo "<prE>";print_r($sel);echo "</pre>"; */
		
		if($session_department=='All' || $session_department=='Marketing'){
			$u_id = "";
		}else{
			$u_id = $uid;
			$this->db->select('cd.u_id'); //cd.cs_id,cd.u_id,
			$this->db->join('tbl_customer_dpoassign cd', 'cd.cs_id = cm.cs_id', 'left');
			$this->db->where('cd.u_id',$u_id);
			if($session_ulevel == 1){
				$this->db->where('cd.assing_type','HD'); 
			}else{
				$this->db->where('cd.csd_id !=','');
			}
		}
		if($searchwhere!='NULL'){
			$this->db->where($searchwhere);
		}
		$sel=$this->db->select('cs.cs_id,cs.cs_invoice_name,cm.int_joineedate,cm.cand_cmp_id,cm.cs_id');
        $this->db->where('cm.i_status',4);
		$this->db->where($where);
		$this->db->where('cm.int_joineedate',NULL);
		$this->db->group_by('cm.cs_id');
		$this->db->order_by('cs.cs_id','DESC');
        $this->db->join('tbl_customer cs', 'cs.cs_id = cm.cs_id', 'left');
        return $this->db->get('tbl_candidate_company as cm')->result_array();	
		echo "<pre>";print_r($sel);echo "</pre>";
	}
	public function list_selected_status($cs_id,$searchwhere='NULL'){
		if($searchwhere!='NULL'){
			$this->db->where($searchwhere);
		}
		$sel=$this->db->select('cs.cs_id,cs.cs_invoice_name,cm.int_date_time,cm.int_joineedate,cm.cand_cmp_id,cm.cs_id,cm.i_status,cn.cand_id,cn.cand_fname,cn.cand_lname,cn.cand_mobile,cn.cand_dob,cn.reg_num,vd.designation');
        $this->db->where('cm.i_status',4);
        $this->db->where('cm.cs_id',$cs_id);
		$this->db->where('cm.int_joineedate',NULL);
        $this->db->join('tbl_customer cs', 'cs.cs_id = cm.cs_id', 'left');
		$this->db->join('tbl_candidate cn', 'cn.cand_id = cm.cand_id', 'left');
		$this->db->join('tbl_quot_verticle_design vd', 'vd.vd_id = cm.fk_pn_id', 'left');
        return $result = $this->db->get('tbl_candidate_company as cm')->result_array();
		echo "<pre>";print_r($sel);echo "</pre>";
	}
	public function Empl_list($where,$order,$session_ulevel,$uid,$session_department,$searchwhere='NULL'){
		/*if($session_ulevel == 1) {
			$u_id = '';
			$op_where = array(
				"assing_type"=>"OP"
			);
		}else{
			$u_id = $uid;			
			$op_where = array(
				"u_id"=>$u_id,
				"assing_type"=>"OP"
			);
		}		
		$sel2=$this->db->select('cs_id');
		$this->db->where($op_where);
		$this->db->group_by('cs_id');
        $assign_cmpy = $this->db->get('tbl_customer_dpoassign')->result_array();
		//return $assign_cmpy;
		for($c=0; $c<count($assign_cmpy); $c++){ 
			$cmid=$assign_cmpy[$c]['cs_id'];
			if($session_ulevel == 3 || $session_ulevel == 4 || $session_ulevel == 5){
				$this->db->or_where('cm.cs_id',$cmid);
			}
		}*/
		/*if($session_ulevel==1){
			$u_id='';
		}else{
			$u_id = $uid;			
			$this->db->select('cd.cs_id,cd.u_id');
			$this->db->where('cd.u_id',$u_id);
			$this->db->join('tbl_customer_dpoassign cd', 'cd.cs_id = cm.cs_id', 'left');
		}
		
		$sel=$this->db->select('cs.cs_id,cs.cs_invoice_name,cm.int_joineedate,cm.cand_cmp_id,cm.cs_id');
        $this->db->where('cm.i_status',4);
		$this->db->order_by($order);
		$this->db->where($where);
		$this->db->where('cm.int_joineedate !=',NULL);
		$this->db->group_by('cm.cs_id');
        $this->db->join('tbl_customer cs', 'cs.cs_id = cm.cs_id', 'left');
        return $result = $this->db->get('tbl_candidate_company as cm')->result_array();	*/
		//echo "<pre>";print_r($sel);echo "</pre>";		
		
		if($session_department=='All' || $session_department=='Marketing'){
			$u_id = "";
		}else{
			$u_id = $uid;
			$this->db->select('cd.u_id'); //cd.cs_id,cd.u_id,
			$this->db->join('tbl_customer_dpoassign cd', 'cd.cs_id = cm.cs_id', 'left');
			$this->db->where('cd.u_id',$u_id);
			if($session_ulevel == 1){
				$this->db->where('cd.assing_type','HD'); 
			}else{
				$this->db->where('cd.csd_id !=','');
			}
		}
		if($searchwhere!='NULL'){
			$this->db->where($searchwhere);
		}
		$sel=$this->db->select('cs.cs_id,cs.cs_invoice_name,cm.int_joineedate,cm.cand_cmp_id,cm.cs_id');
        $this->db->where('cm.i_status',4);
		$this->db->where('cm.int_joineedate !=',NULL);
        //$this->db->where('cm.int_joineedate !=',NULL);
		$this->db->order_by($order);
		$this->db->group_by('cm.cs_id');
        $this->db->join('tbl_customer cs', 'cs.cs_id = cm.cs_id', 'left');
        return $this->db->get('tbl_candidate_company as cm')->result_array();
	}
	public function getCandCompDet($cand_id){
		$sel=$this->db->select('cs.cs_id,cs.cs_invoice_name,cm.int_joineedate,cm.cand_cmp_id,cm.cs_id');
        $this->db->where('cm.i_status',4);
		$this->db->where('cm.cand_id',$cand_id);
        $this->db->where('cm.int_joineedate !=',NULL);
		$this->db->order_by("cm.cand_cmp_id","DESC");
        $this->db->join('tbl_customer cs', 'cs.cs_id = cm.cs_id', 'left');
		return $this->db->get('tbl_candidate_company as cm')->result_array();
	}
	public function findfor_interview($cand_id){
		$sel=$this->db->select('cm.*,ic.i_id,ic.i_status');
		$this->db->where('cm.cand_id',$cand_id);
        $this->db->where('ic.i_status !=',4);
        $this->db->where('cm.i_status !=','NULL');
        $this->db->or_where('cm.i_status',0);
		$this->db->order_by("cm.cand_cmp_id","DESC");
        $this->db->join('tbl_interview_status ic', 'ic.i_id = cm.i_status', 'left');
        return $this->db->get('tbl_candidate_company as cm')->result_array();
	}
	public function getSelectionData($cand_id){
		$sel=$this->db->select('cm.int_joineedate,cm.cand_cmp_id,cm.i_status,cm.cand_id');
        $this->db->where('cm.i_status',4);
		$this->db->where('cm.cand_id',$cand_id);
		$this->db->order_by("cm.cand_cmp_id","DESC");
        return $this->db->get('tbl_candidate_company as cm')->result_array();
	}
	public function list_selected_employee($cs_id,$searchwhere='NULL'){
		if($searchwhere!='NULL'){
			$this->db->where($searchwhere);
		}
		$sel=$this->db->select('cs.cs_id,cs.cs_invoice_name,cm.int_date_time,DATE_FORMAT(cm.int_joineedate,"%d-%m-%Y") as int_joineedate,cm.cand_cmp_id,cm.cs_id,cm.i_status,cn.cand_id,cn.cand_fname,cn.cand_lname,cn.cand_mobile,cn.cand_dob,cn.reg_num,vd.designation');
        $this->db->where('cm.i_status',4);
        $this->db->where('cm.cs_id',$cs_id);
		$this->db->where('cm.int_joineedate !=',NULL);
        $this->db->join('tbl_customer cs', 'cs.cs_id = cm.cs_id', 'left');
		$this->db->join('tbl_candidate cn', 'cn.cand_id = cm.cand_id', 'left');
		$this->db->join('tbl_quot_verticle_design vd', 'vd.vd_id = cm.fk_pn_id', 'left');
        return $result = $this->db->get('tbl_candidate_company as cm')->result_array();
	}
	public function DailyListCont($cs_id,$where,$order){
		$sel=$this->db->select('cs.cs_id,cd.csd_contact_mobile,cd.cs_id');
		$this->db->where($where);
        $this->db->where('cd.cs_id',$cs_id);
		$this->db->order_by($order);
		$this->db->limit(10);
		$this->db->where('cm.i_status',4);
		$this->db->where('cm.int_joineedate !=',NULL);
        $this->db->join('tbl_customer cs', 'cs.cs_id = cd.cs_id', 'left');	
		$this->db->join('tbl_candidate_company cm', 'cm.cs_id = cm.cs_id', 'left');
        return $result = $this->db->get('tbl_customer_detailorder cd')->result_array();
		echo "<pre>";print_r($sel);echo "</pre>";		
	}
	public function getDailyDetailData($where){
		$sel=$this->db->select('cd.*,DATE_FORMAT(cd.csd_create_date,"%d-%m-%Y") as csd_create_date');
		$this->db->where($where);
		return $result = $this->db->get('tbl_customer_detailorder as cd')->result_array();
	}
	public function ViewActivity($csd_id){
		 $sel = $this->db->select("a.*,inc.inc_name,cp.dco_name,cs.cs_id,cs.cs_invoice_name,DATE_FORMAT(a.da_create_on,'%d-%m-%Y') as da_create_on");
        $this->db->where('a.csd_id', $csd_id);
        $this->db->join('tbl_customer cs', 'cs.l_id = a.l_id', 'left');
        $this->db->join('tbl_dcr_incident inc', 'inc.inc_id = a.da_incedent', 'left');
        $this->db->join('tbl_dcr_complaint cp', 'cp.dco_id = a.da_complain', 'left');
        return $result = $this->db->get('tbl_dcr_dailyactivity a')->result_array();
	}
	public function getComp($where,$session_department,$uid,$session_ulevel){
		//echo $session_department."--".$uid."***".$session_ulevel;
		/*if($session_department=='All' || $session_department=='Marketing'){
			$u_id = "";
		}else{
			$u_id = $uid;
			$this->db->select('dp.u_id,dp.cs_id'); //cd.cs_id,cd.u_id,
			$this->db->join('tbl_customer_dpoassign dp', 'dp.cs_id = a.cs_id', 'left');
			$this->db->where('dp.u_id',$u_id);
			// && $session_ulevel == 1			
			if($u_level == 1){
				//$this->db->where_in('u_level',array('2','3','4','5'));
				$this->db->where('dp.assing_type','HD'); 
			}else{
				//$this->db->where('dp.assing_type','OP');
				$this->db->where('dp.csd_id !=','');
			}		
		}*/
		if($session_department=='All' || $session_department=='Marketing'){
			$u_id = "";
		}else{
			$u_id = $uid;
			$this->db->select('dp.u_id,dp.cs_id'); //cd.cs_id,cd.u_id,
			$this->db->join('tbl_customer_dpoassign dp', 'dp.cs_id = a.cs_id', 'left');
			$this->db->where('dp.u_id',$u_id);
			// && $session_ulevel == 1			
			if($session_ulevel == 1){
				//$this->db->where_in('u_level',array('2','3','4','5'));
				$this->db->where('dp.assing_type','HD'); 
			}else{
				//$this->db->where('dp.assing_type','OP');
				$this->db->where('dp.csd_id !=','');
			}		
		}
		$a=$this->db->select("a.cs_id,a.cs_invoice_name");
		$this->db->where($where);
		//$this->db->join('tbl_customer_dpoassign cd','cd.cs_id = a.cs_id', 'left');cd.cs_id,cd.u_id
		$this->db->group_by('a.cs_id');
		return $this->db->get("tbl_customer a")->result_array();
		echo "<pre>";print_r($a);echo "</pre>";
	}
	public function bluePosit(){
		$this->db->select("*");
		$where = '(collor_type="BLUE" or collor_type = "BOTH")';
		$this->db->where($where);
		return $this->db->get("tbl_quot_verticle_design")->result_array();
	}
	public function whitePosit(){
		$this->db->select("*");
		$where = '(collor_type="WHITE" or collor_type = "BOTH")';
		$this->db->where($where);
		return $this->db->get("tbl_quot_verticle_design")->result_array();		
	}
	public function getCompList($where,$uid,$session_ulevel,$searchwhere='NULL'){
		if($session_ulevel == 1){
			$u_id = '';
			$op_where = array(
				"assing_type"=>"OP"
			);
		}else{
			$u_id = $uid;			
			$op_where = array(
				"u_id"=>$u_id,
				"assing_type"=>"OP"
			);
		}
		
		$sel2=$this->db->select('cs_id');
		$this->db->where($op_where);
		$this->db->group_by('cs_id');
        $assign_cmpy = $this->db->get('tbl_customer_dpoassign')->result_array();
		for($c=0; $c<count($assign_cmpy); $c++){ 
			$cmid=$assign_cmpy[$c]['cs_id'];
			if($session_ulevel == 3 || $session_ulevel == 4 || $session_ulevel == 5){
				$this->db->or_where('cm.cm_company',$cmid);
			}
		}
		if($searchwhere!='NULL'){
			$this->db->where($searchwhere);
		}
		$sel=$this->db->select('cm.*,cs.cs_invoice_name,CONCAT(c.fname," ",c.lname ) AS createname,DATE_FORMAT(cm.cm_create_on,"%d-%m-%Y %h:%i:%s") as cm_create_on');
        $this->db->join('tbl_customer cs', 'cs.cs_id = cm.cm_company', 'left');
		$this->db->join('cosmos_users c', 'c.u_id = cm.cm_create', 'left');
		$this->db->where($where);
		$this->db->order_by("cm.cm_id","DESC");
        return $result = $this->db->get('tbl_complain as cm')->result_array();
	}
	public function getCompCust(){
		$this->db->select('*');
		$this->db->where('ct_type','Customer');
		$this->db->order_by('ct_select','DESC');
		return $this->db->get('tbl_complaint_type')->result_array();	
	}
	public function getCompemployee(){
		$this->db->select('*');
		$this->db->where('ct_type','Employee');
		$this->db->order_by('ct_select','DESC');
		return $this->db->get('tbl_complaint_type')->result_array();
	}
	public function getAssignedComp($uid,$session_ulevel){
		if($session_ulevel == 1) {
			$u_id = '';
			$op_where = array(
				"assing_type"=>"OP"
			);
		}else{
			$u_id = $uid;
			$op_where = array(
				"u_id"=>$u_id,
				"assing_type"=>"OP"
			);
		}
		$sel2=$this->db->select('cs_id');
		$this->db->where($op_where);
		$this->db->group_by('cs_id');
		$assign_cmpy = $this->db->get('tbl_customer_dpoassign')->result_array();
		for($c=0; $c<count($assign_cmpy); $c++){ 
			$cmid=$assign_cmpy[$c]['cs_id'];
			if($session_ulevel == 3 || $session_ulevel == 4 || $session_ulevel == 5){
				$this->db->or_where('cm.cs_id',$cmid);
			}
		}
		
		$sel=$this->db->select('cm.*');
		$this->db->where('cm.cs_process_status','customer');
		return $this->db->get('tbl_customer as cm')->result_array();
	}
	public function getPayrollPerson($sel_comp,$assingn_type,$u_department){
		$sel=$this->db->select('cd.assing_type,cd.cs_id,cd.u_id,c.fname');
		$this->db->join('cosmos_users c', 'c.u_id = cd.u_id', 'left');
		if($assingn_type==''){
			$this->db->where('c.u_department',$u_department);
		}
        $this->db->where('cd.assing_type',$assingn_type);
        $this->db->where('cd.cs_id',$sel_comp);
		$this->db->group_by('cd.u_id');
        return  $this->db->get('tbl_customer_dpoassign as cd')->result_array();
	}
	public function getempComps($sel_comp){
		$this->db->select("a.* ,b.cand_fname");
        $this->db->where('cs_id',$sel_comp);  //  1 64
		$this->db->where('a.i_status',4);
		$this->db->where('a.int_joineedate !=',NULL);
        $this->db->join('tbl_candidate b', 'b.cand_id = a.cand_id', 'left');
        $this->db->group_by('a.cand_id');
        return $this->db->get("tbl_candidate_company a")->result_array();
	}
	public function getCompCnt($type,$ct_mail){
		$sel=$this->db->select('ct_id,ct_type,ct_mail');
		$this->db->where_in('ct_id', $type);
		$this->db->where('ct_mail',$ct_mail);
		return $this->db->get('tbl_complaint_type')->result_array();
	}
	public function collectedDocs($cs_id){
		$sql=$this->db->select("a.* ,b.cand_fname");
        $this->db->join('tbl_candidate b', 'b.cand_id = a.cand_id', 'left');
        //$this->db->join('tbl_candidate_document cd', 'cd.cand_id = b.cand_id', 'left');
		$this->db->where('cs_id',$cs_id);
		$this->db->where('a.i_status',4);
		$this->db->where('a.int_joineedate !=',NULL);
        //$this->db->group_by('a.cand_id');
        return $this->db->get("tbl_candidate_company a")->result_array();
	}
	public function getDailyActData($where){
		$sel=$this->db->select('*,DATE_FORMAT(fv_create_on,"%d-%m-%Y") as fv_create_on');
		$this->db->where($where);
		return $this->db->get('tbl_field_visit')->result_array();
	}
	public function searchCandMob($search_mob){
		$sel=$this->db->select('*');
		$this->db->where("(cand_mobile='".$search_mob."' OR secondry_mobile='".$search_mob."')");
		return $this->db->get('tbl_candidate')->result_array();
		echo "<pre>";print_r($sel);echo "</pre>"; 
	}
	public function buss_devSearch($search_newb){
		$sel=$this->db->select('*');
		$this->db->where("(bd_company LIKE '%".$search_newb."%' OR bd_industry LIKE '%".$search_newb."%' OR bd_type LIKE '%".$search_newb."%')");
		return $this->db->get('tbl_business_development')->result_array();
		
	}
	public function getbusinessDet($where){
		$this->db->select("*,DATE_FORMAT(bd_start_date,'%d-%m-%Y') as bd_start_date");
		$this->db->where($where);
		return $this->db->get('tbl_business_development')->result_array();
	}
	public function searchIntList($uid,$session_ulevel,$where1){
		//echo "in model";
		//echo "<pre>";print_r($where1);echo "</pre>";
		if($session_ulevel==1){
			$u_id='';
			$where=array();			
		}else{
			$u_id=$uid;
			$where = array(
				"created_by"=>$u_id,					
			);
		}		
		$a=$this->db->select("c.*,CONCAT(cr.fname, ' ', cr.lname ) AS createname");
		$this->db->join("cosmos_users as cr", "cr.u_id = c.created_by", 'left');
		
		//$this->db->where('c.reg_type','PROVISIONAL');
		$this->db->where('cand_reg_from','fo');
		$this->db->where($where1);
		$this->db->order_by("cand_id","DESC");
		return $this->db->get("tbl_candidate as c")->result_array();
		echo "<pre>";print_r($a);echo "</pre>";
	}
}
?>