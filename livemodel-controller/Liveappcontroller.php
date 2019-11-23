<?php defined('BASEPATH') OR exit('No direct script access allowed');
class Liveappcontroller extends CI_Controller {
	public function __construct(){
        parent:: __construct(); 
        $this->load->model("Liveappmodel","model");
		$this->load->model("Alldata","alldata_model");
    }
	public function checkLogin(){
		//echo "<prE>";print_r($_POST);echo "</pre>";die; 
/*		$username=$this->input->post("username");
        $password=md5($this->input->post("password"));
		//$username=$this->input->post("u_name"); 
		//$password=md5($this->input->post("u_pass")); 
		$data=array('u_name'=>$username,'u_pass'=>$password,'is_delete'=>1);	
		//echo "<prE>";print_r($data);echo "</pre>";		
		$userData['loggedin_user'] = $this->alldata_model->DetailData('cosmos_users', $data);
		if(count($userData['loggedin_user'])!= 0) {
			//echo "if";
			$lastlogin = date('Y-m-d H:i:s');
            $data = array('last_login' => $lastlogin);
            $where = array('u_id' => $userData['loggedin_user'][0]['u_id']);
            $this->alldata_model->UpdateData('cosmos_users', $data, $where); 
			echo json_encode($userData);
		}else{
			//echo "else";
			//echo count($userData['loggedin_user']);
			$data['loggedin_user'] = count($userData['loggedin_user']);
			echo json_encode($data);
		}*/
		$username=$this->input->post("username");
        $password=md5($this->input->post("password"));
        $loggedin_user['loggedin_user']=$this->model->checkUserLogin($username,$password);
        echo json_encode($loggedin_user); 
	}
	public function chkLogedinUserStatusPwd(){
		$session_u_id=$this->input->post("session_u_id");
		$chkStPwd['chkStPwd'] = $this->alldata_model->DetailData("cosmos_users",array('u_id'=>$session_u_id));
		echo json_encode($chkStPwd);
	}
	/*public function chklogin(){
		$username=$this->input->post("username");
        $password=md5($this->input->post("password"));
        $loggedin_user['loggedin_user']=$this->model->checkUserLogin($username,$password); 
		if(count($loggedin_user['loggedin_user'])!=0){		
			$u_id=$loggedin_user['loggedin_user'][0]['u_id'];
			$data=array('last_login'=>date("Y-m-d h:i:s")); 
			$where=array('u_id'=>$u_id);		
			$this->alldata_model->UpdateData('cosmos_users', $data, $where); 
			$loggedin_user['loggedin_user'][0]['last_login'] = date("d-m-Y"); 
		}
		echo json_encode($loggedin_user);
	}*/
	
	public function dpo_list(){
		/*$uid=$this->input->post("uid");
		$session_ulevel=$this->input->post("session_ulevel");
		$where=array('cs_delete' => 1,'cs_process_status' =>'customer');
		$data['dpoList']=$this->model->getDPOList($uid,$session_ulevel,$where);
		echo json_encode($data);*/
		
		$uid=$this->input->post("uid");
		$session_ulevel=$this->input->post("session_ulevel");
		$session_department = $this->input->post("session_department");
		$where=array('cs_delete' => 1,'cs_process_status' =>'customer');
		$searchwhere='NULL';
		$data['dpoList']=$this->model->getDPOList($uid,$session_ulevel,$where,$session_department,$searchwhere);
		$verti=array();$cnt=array();$cno=array();		
		foreach($data['dpoList'] as $i=>$val){ 
			$cs_id=$this->alldata_model->encryptdata($val['cs_id']);
			$where=array('csd.cs_id'=>$val['cs_id'],'csd.qutn_type'=>'custom');
			//$datacustom= $this->alldata_model->DetailData('tbl_customer_detailorder',$where); 
			$datacustom=$this->model->dpo_list_verticle($where,$session_ulevel,$session_department,$uid);
			$where=array('csd.cs_id'=>$val['cs_id'],'csd.qutn_type'=>'lumsum');
			//$datalumsum = $this->alldata_model->DetailData('tbl_customer_detailorder',$where);
			$datalumsum=$this->model->dpo_list_verticle($where,$session_ulevel,$session_department,$uid);
			$where=array('csd.cs_id'=>$val['cs_id'],'csd.qutn_type'=>'placement');
			//$dataplace = $this->alldata_model->DetailData('tbl_customer_detailorder',$where);
			$dataplace=$this->model->dpo_list_verticle($where,$session_ulevel,$session_department,$uid); 
			$cusarry=array();
			$contary=array();
			if(count($datalumsum)>0){
				foreach ($datalumsum as $valx){
					$cusarry[]=$valx['csd_verticle'];
					$contary[]=$valx['csd_contact_mobile']; 
			 	} //foreach custom
			} 
			if(count($datacustom)>0){
				foreach ($datacustom as $vdalx){
					 $cusarry[]=$vdalx['csd_verticle']; 
					 $contary[]=$vdalx['csd_contact_mobile'];
			 	} //foreach custom
			} 
			if(count($dataplace)>0){
				foreach ($dataplace as $vdalxp){
					$cusarry[]=$vdalxp['csd_verticle']; 
					$contary[]=$vdalxp['csd_contact_mobile']; 
			 	} //foreach custom
			}
			$counts=array_count_values($cusarry);
			$cont=array_count_values($contary);
			$verti[$i]=$counts;
			$cno[$i]=$contary;
			$tot[$i]=count($cusarry);
		}
		//echo "<prE>";print_r($tot);echo "</prE>";
		$data['verti']=$verti;
		$data['cont_arr']=$cno;
		if(count($data['dpoList'])==0){
			$data['tot_vert']=0;
		}else{
			$data['tot_vert']=$tot;
		}		
		echo json_encode($data);		
	}
	public function provisional_states(){
		$states = $this->alldata_model->getDatamodel('tbl_state_erp');
		$list_states = '';
		if(count($states)!=0){
			$list_states.='<option value="">--- SELECT STATE ---</option>';
			foreach($states as $state){
				$list_states.='<option value='.$state["s_id"].'>'.$state["state_name"].'</option>';
			}
		}else{
			$list_states.='<option value="">No Data Available</option>';
		}
		echo $list_states;
	}
	public function provisional_districts(){
		$s_id=$this->input->post("s_id");
		$where = array('is_delete'=>1,'s_id'=>$s_id);
		$districts = $this->alldata_model->DetailData("tbl_district",$where);
		$list_dists = '';
		if(count($districts)!=0){
			$list_dists.='<option value="">--- SELECT DISTRICT ---</option>';
			foreach($districts as $dist){
				$list_dists.='<option value='.$dist["d_id"].'>'.$dist["district_name"].'</option>';
			}
		}else{
			$list_dists.='<option value="">No Data Available</option>';
		}
		echo $list_dists;
	}
	public function provisional_cities(){
		$d_id=$this->input->post("d_id");
		$where = array('is_delete'=>1,'d_id'=>$d_id);
		$cities = $this->alldata_model->DetailData("tbl_city_erp",$where);
		$list_cities = '';
		if(count($cities)!=0){
			$list_cities.='<option value="">--- SELECT CITY ---</option>';
			foreach($cities as $city){
				$list_cities.='<option value='.$city["c_id"].'>'.$city["city_name"].'</option>';
			}
		}else{
			$list_cities.='<option value="">No Data Available</option>';
		}
		echo $list_cities;
	}
	public function checkPrimaryMobile(){
		$primary_mob=$this->input->post("primary_mob");
		$cand_id = $this->input->post('cand_id');
		if ($cand_id != '') {
            /*$this->db->select("*");
            $this->db->from("tbl_candidate");
            $this->db->where('cand_mobile', $mobileNumber);
            $this->db->where('cand_mobile !=', "");
            $this->db->where_not_in('cand_id', $cand_id);
            $cndData_mob = $this->db->get()->result_array();*/
			$cndData_mob = $this->model->checkMobileNo($cand_id,$primary_mob);
        } else {
            $cndData_mob = $this->alldata_model->sortingWheredata('cand_mobile', 'tbl_candidate', array('cand_mobile' => $primary_mob), 'cand_mobile', 'ASC');
        }
        if(!empty($cndData_mob)) {
            $resultArrauy['status'] = 'success';
            echo json_encode($resultArrauy);
        } else {
            $resultArrauy['status'] = 'error';
            echo json_encode($resultArrauy);
        }
	}
	public function getBlueCollarPositions(){
		$type = $this->input->post("type");        
		$data = $this->model->getCollarBlue($type);
		$html = '';
		//$html .= '<option value="">SELECT JOB FUNCTION</option>';
		foreach ($data as $key) {
			$where = array('job_pos_id' => $key['job_pos_id']);
			$functionsName = $this->alldata_model->sortingWheredata('*', 'tbl_pos_functions', $where, 'job_pos_fun_name', 'ASC');
			$job_pos = $key['job_pos'];
			$html .= '<optgroup label="' . $job_pos . '" >';
			foreach ($functionsName as $key1) {
				$fn_id = $key1['fn_id'];
				$job_pos_fun_name = $key1['job_pos_fun_name'];
				$html .= '<option value="' . $fn_id . '" >' . $job_pos_fun_name . '</option>';
			}
			$html .= '</optgroup>';
		  }
		  //$html .= '</select>';
		  $resultArrauy['status'] = 'success';
		  $resultArrauy['html'] = $html;
		  echo json_encode($resultArrauy);
	}
	public function getWhiteCollarPositions(){
		$type = $this->input->post("type"); 
		$data = $this->model->getCollarWhite($type);
		$html = '';
		//$html .= '<option value="">SELECT FUNCTION</option>';
		foreach ($data as $key) {
            $where = array('job_pos_id' => $key['job_pos_id']);
            $functionsName = $this->alldata_model->sortingWheredata('*', 'tbl_pos_functions', $where, 'job_pos_fun_name', 'ASC');
            $job_pos = $key['job_pos'];
            $html .= '<optgroup label="' . $job_pos . '">';
            foreach ($functionsName as $key1) {
                $fn_id = $key1['fn_id'];
                $job_pos_fun_name = $key1['job_pos_fun_name'];
                $html .= '<option value="' . $fn_id . '">' . $job_pos_fun_name . '</option>';
            }
            $html .= '</optgroup>';
        }
        //$html .= '</select>';

        $resultArrauy['status'] = 'success';
        $resultArrauy['html'] = $html;
        echo json_encode($resultArrauy);
	}
	public function getPositions(){
		$type = $this->input->post("type");		
		$data = $this->model->getPosit($type);
        if (!empty($data)) {
            $html = '<option value="" >SELECT POSITION</option>';
			foreach ($data as $val) {
				$vd_id = $val['vd_id'];
				$designation = $val['designation'];
				$html .= '<option value="' . $vd_id . '" >' . $designation . '</option>';
			}
        }else{
            $html = '<option value="" >SELECT POSITION</option>';
        }
		if (!empty($data)) {
			$resultArrauy['status'] = 'Success';
			$resultArrauy['html'] = $html;
			echo json_encode($resultArrauy);
		}else{
			$resultArrauy['status'] = 'error';
			$resultArrauy['html'] = $html;
			echo json_encode($resultArrauy);
		}
	}
	public function getBlueCollarDataNew(){
		$sel = $this->db->select('*');
		$sel = $this->db->from('tbl_highest_qualification');
		$sel = $this->db->where('h_q_type', "BLUE");
		$query = $this->db->get()->result_array();

        $a =  [];      
		$html='';
		//$sel='';
		foreach($query as $key=>$value){
            $this->db->select('*');
            $this->db->where('fk_h_q_id',$value['h_q_id']);
            $taluka=$this->db->get('tbl_highest_qualification_course')->result_array();
            $value["taluka"] = $taluka;
            $a[$value['h_q_name']] = [];
            /*foreach($taluka as $key2=>$val2){
				$this->db->select('*');
				$this->db->where('fk_h_q_c_id',$val2['h_q_c_id']);
				$specia=$this->db->get('tbl_highest_qualification_course_specilize')->result_array();
				$a[$value['h_q_name']][$val2['h_q_c_name']] = $specia;
				$h_q_name = $value['h_q_name'];
                $h_q_c_name = $val2['h_q_c_name'];

                $h_q_name = trim($h_q_name);
                $h_q_c_name = trim($h_q_c_name);
                $st = $h_q_name . ' - ' . $h_q_c_name;
                $st = trim($st);

                $innder = '';
                foreach ($specia as $key3 => $val3) {
					$h_q_c_s_id = $val3['h_q_c_s_id'];
					$h_q_c_s_name = $val3['h_q_c_s_name'];
					if(count($specia) >=10){
						$cls='sublist-accr';
					}else{
						$cls='';
					}
					$innder .= '<p><label><input type="radio" onclick="setValues($(this))" required data-parent="' . $h_q_c_name . '" data-name="' . $h_q_c_s_name . '" name="firstField[]" value="' . $h_q_c_s_id . '" id="id_education_specialization_101_501" data-group="group_1"> ' . $h_q_c_s_name . '</label></p>';
				}
				//$sel='SELECT QUALIFICATION';
                //$html .= '<li><a data-toggle="collapse" data-parent="#accordion" href="#collapseOne' .$key. '_' .$key2. '" aria-expanded="true" aria-controls="collapseOne' .$key. '_' .$key2. '"><span class="glyphicon glyphicon-menu-down pull-right"></span>' .$st. '</a><div id="collapseOne' . $key . '_' .$key2. '" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne"><div class="col-sm-12 test">'.$innder.'</div></div></li>';
				
				$html .= '<li class="accordion-item"><a href="#collapseOne' .$key. '_' .$key2. '" class="item-content item-link"><div class="item-inner"><div class="item-title">' .$st. '</div></div></a><div class="accordion-item-content list-accr '.$cls.'"><div class="block">' .$innder. '</div></div> </li>';
            }*/
			foreach ($taluka as $key2 => &$val2) {
					$this->db->select('*');
					$this->db->where('fk_h_q_c_id', $val2['h_q_c_id']);
					$specia = $this->db->get('tbl_highest_qualification_course_specilize')->result_array();

					$a[$value['h_q_name']][$val2['h_q_c_name']] = $specia;
					$h_q_name = $value['h_q_name'];
					$h_q_c_name = $val2['h_q_c_name'];

					$h_q_name = trim($h_q_name);
					$h_q_c_name = trim($h_q_c_name);
					$st = $h_q_name . ' - ' . $h_q_c_name;
					$st = trim($st);
					$innder = '';
					//$where = array('job_pos_id' => $key['job_pos_id']);
					//$functionsName = $this->alldata_model->sortingWheredata('*', 'tbl_pos_functions', $where, 'job_pos_fun_name', 'ASC');
					//$job_pos = $key['job_pos'];
					$html .= '<optgroup label="' . $st . '">';
					foreach ($specia as $key3 => &$val3) {
						$h_q_c_s_id = $val3['h_q_c_s_id'];
						$h_q_c_s_name = $val3['h_q_c_s_name'];
						$html .= '<option value="' . $h_q_c_s_id . '" class="font-12">' . $h_q_c_s_name . '</option>';
					}
					$html .= '</optgroup>';
				}
			
        }
		// $main = '<input type="text" class="input-sm" id="myInput" onkeyup="myFunction()" placeholder="Search for Qualification.." title="Type in a name">';
		$main = '';
		$main .= $html;
        $data['html'] = $main;
        $resultArrauy['status'] = "success";
        $resultArrauy['html'] = $main;
        echo json_encode($resultArrauy);      
	}
	public function getWhiteCollarDataNew(){
		$sel = $this->db->select('*');
        $sel = $this->db->from('tbl_highest_qualification');
        $sel = $this->db->where('h_q_type', "WHITE");
        $query = $this->db->get()->result_array();
		//echo "<pre>";print_r($query);echo "</pre>";
        $a = [];
        $html = '';
        foreach ($query as $key => &$value) {
            $this->db->select('*');
            $this->db->where('fk_h_q_id', $value['h_q_id']);
            $taluka = $this->db->get('tbl_highest_qualification_course')->result_array();
            $value["taluka"] = $taluka;
            $a[$value['h_q_name']] = [];

            /*foreach ($taluka as $key2 => &$val2) {
                $this->db->select('*');
                $this->db->where('fk_h_q_c_id', $val2['h_q_c_id']);
                $specia = $this->db->get('tbl_highest_qualification_course_specilize')->result_array();

                $a[$value['h_q_name']][$val2['h_q_c_name']] = $specia;
                $h_q_name = $value['h_q_name'];
                $h_q_c_name = $val2['h_q_c_name'];

                $h_q_name = trim($h_q_name);
                $h_q_c_name = trim($h_q_c_name);
                $st = $h_q_name . ' - ' . $h_q_c_name;
                $st = trim($st);
                $innder = '';
				
				
		
                foreach ($specia as $key3 => &$val3) {
                    $h_q_c_s_id = $val3['h_q_c_s_id'];
                    $h_q_c_s_name = $val3['h_q_c_s_name'];
                    $innder .= '<p><label><input type="radio"  onclick="setValues($(this))" data-parent="' . $h_q_c_name . '" data-name="' . $h_q_c_s_name . '" name="firstField[]" value="' . $h_q_c_s_id . '" id="id_education_specialization_101_501" data-group="group_1"> ' . $h_q_c_s_name . '</label></p>';
                }
			
                //$html.= '<li class="accordion-item"><a data-toggle="collapse" data-parent="#accordion" href="#collapseOne' . $key . '_' . $key2 . '" aria-expanded="true" aria-controls="collapseOne' . $key . '_' . $key2 . '"><span class="glyphicon glyphicon-menu-down pull-right"></span>' . $st . '</a><div id="collapseOne' . $key . '_' . $key2 . '" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne"><div class="col-sm-12 test">' . $innder . '</div></div></li>';
				
				$html .= '<li class="accordion-item"><a href="#collapseOne' .$key. '_' .$key2. '" class="item-content item-link"><div class="item-inner"><div class="item-title">' .$st. '</div></div></a><div class="accordion-item-content list-accr"><div class="block">' .$innder. '</div></div> </li>';
				
				
				//$html .= '<li class="accordion-item"><a href="#collapseOne' .$key. '_' .$key2. '" class="item-content item-link"><div class="item-inner"><div class="item-title">' .$st. '</div></div></a><div class="accordion-item-content list-accr"><div class="block">' .$innder. '</div></div> </li>';
            }*/
			foreach ($taluka as $key2 => &$val2) {
				$this->db->select('*');
				$this->db->where('fk_h_q_c_id', $val2['h_q_c_id']);
				$specia = $this->db->get('tbl_highest_qualification_course_specilize')->result_array();

				$a[$value['h_q_name']][$val2['h_q_c_name']] = $specia;
				$h_q_name = $value['h_q_name'];
				$h_q_c_name = $val2['h_q_c_name'];

				$h_q_name = trim($h_q_name);
				$h_q_c_name = trim($h_q_c_name);
				$st = $h_q_name . ' - ' . $h_q_c_name;
				$st = trim($st);
				$innder = '';
				//$where = array('job_pos_id' => $key['job_pos_id']);
				//$functionsName = $this->alldata_model->sortingWheredata('*', 'tbl_pos_functions', $where, 'job_pos_fun_name', 'ASC');
				//$job_pos = $key['job_pos'];
				$html .= '<optgroup label="' . $st . '">';
				foreach ($specia as $key3 => &$val3) {
					$h_q_c_s_id = $val3['h_q_c_s_id'];
					$h_q_c_s_name = $val3['h_q_c_s_name'];
					$html .= '<option value="' . $h_q_c_s_id . '" class="font-12">' . $h_q_c_s_name . '</option>';
				}
				$html .= '</optgroup>';
			}
        }
		
        // $main = '<input type="text" class="input-sm" id="myInput" onkeyup="myFunction()" placeholder="Search for Qualification.." title="Type in a name">';
        $main= '';
        $main.= $html;
        $data['html'] = $main;		
        $resultArrauy['status'] = "success";
        $resultArrauy['html'] = $main;		
        echo json_encode($resultArrauy);
	}
	public function getDPODetails(){
		$cs_id = $this->input->post("cs_id");
		$session_uid = $this->input->post("session_uid");
		$session_department = $this->input->post("session_department");
		$session_ulevel = $this->input->post("session_ulevel");
		$where=array('cs_id'=>$cs_id);
		$data['cust_data'] = $this->alldata_model->DetailData("tbl_customer",$where);
		$id=$data['cust_data'][0]['l_id'];
		$data['lead'] = $this->model->customer_detail_list($id);
		if($session_department=='All' || $session_department=='Marketing'){
			$u_id = "NULL";
		}else{
			$u_id = $session_uid;
		}
		$where=array('cs_id'=>$cs_id,'qutn_type'=>'custom');
		//$data['custom'] = $this->alldata_model->DetailData('tbl_customer_detailorder',$where);
		$data['customccc'] = $this->alldata_model->DetailData('tbl_customer_detailorder',$where);
		$data['custom'] = $this->model->get_custom_data($u_id,$cs_id,$session_ulevel);		
		$where1=array('cs_id'=>$cs_id,'qutn_type'=>'lumsum');
		//$data['lumsum'] = $this->alldata_model->DetailData('tbl_customer_detailorder',$where1);
		$data['lumsum'] = $this->model->get_lumsum_data($u_id,$cs_id,$session_ulevel);
		$where2=array('cs_id'=>$cs_id,'qutn_type'=>'placement');
		//$data['place'] = $this->alldata_model->DetailData('tbl_customer_detailorder',$where2);
		$data['place'] = $this->model->get_place_data($u_id,$cs_id,$session_ulevel);
		$data['placeccc'] = $this->alldata_model->DetailData('tbl_customer_detailorder',$where2);		
		$data['candidate'] = $this->model->CandData($cs_id); 		
		$where_dpo = array(
            'cs_id' => $cs_id,
            'u_id' => $session_uid,
            'dpo_seen' => 0
        );
        $this->alldata_model->UpdateData('tbl_customer_dpoassign', array('dpo_seen' => 1), $where_dpo);		
		echo json_encode($data); 
	}
	public function dpodetail_view(){
		$csd_id = $this->input->post("csd_id");
		$data['cust_order'] = $this->model->getCustromerOrder($csd_id);
		$data['qulification_cat'] = $this->alldata_model->getDatamodel('tbl_qualification_category');
        $data['qualification'] = $this->alldata_model->getDatamodel('tbl_qualification');
		$data['designation'] = $this->alldata_model->getDatamodel('tbl_lead_designation');
		$dl_lid = $data['cust_order'][0]['l_id'];
		$dl_qutn_id = $data['cust_order'][0]['qutn_id'];
		$dl_qutn_type = $data['cust_order'][0]['qutn_type'];
		$where=array(
			'l_id' => $dl_lid,
			'qtn_id' => $dl_qutn_id,
			'qtn_type' => $dl_qutn_type,
		);
		$data['blue_hight'] = $this->alldata_model->DetailData('tbl_highest_qualification',array('h_q_type'=>'BLUE'));
		$data['white_hight'] = $this->alldata_model->DetailData('tbl_highest_qualification',array('h_q_type'=>'WHITE'));
		$qual = array();
		if($dl_qutn_type=='custom' || $dl_qutn_type=='lumsum'){
			$data['preinfo'] = $this->alldata_model->DetailData('tbl_quot_preinformation',$where);			
			if(count($data['preinfo'])>0){
				$edu = $data['preinfo'][0]['pr_education'];
				$mr_position = $data['preinfo'][0]['pr_designation'];
				$exp_pos = explode("|",$mr_position);
			
			//echo "<br/>";		
			
			$arr=array();
			$data['spec_arr'] = array();
			$data['spec_arr1'] = array();
			for($i=0;$i<count($exp_pos);$i++){
				//echo "I is::".$i;
				//echo "<br/>";
				$explode_edu = explode("|",$edu);
				$arr=$explode_edu[$i];
				foreach ($data['blue_hight'] as $blkey) {
				$where_bl = array('fk_h_q_id' => $blkey['h_q_id']);
				$quali_bl_course = $this->alldata_model->sortingWheredata('*', 'tbl_highest_qualification_course', $where_bl, 'h_q_c_name', 'ASC');							
				foreach($quali_bl_course as $bl_cous){
					$where_bl_cs = array('fk_h_q_c_id' => $bl_cous['h_q_c_id']);
					$quali_bl_specil = $this->alldata_model->sortingWheredata('*','tbl_highest_qualification_course_specilize', $where_bl_cs, 'h_q_c_s_name', 'ASC'); 
								
					foreach($quali_bl_specil as $bl_spcl){ 
						if($bl_spcl['h_q_c_s_id'] == $arr){	
//echo "BLUE ID ".$bl_spcl['h_q_c_s_id'];						
							//$data['h_q_c_s_name'] = $bl_spcl['h_q_c_s_name']; 
							array_push($data['spec_arr'],$bl_spcl['h_q_c_s_name']);
						} 
					}
				}
				}
				foreach ($data['white_hight'] as $whkey) {
							$where_wt = array('fk_h_q_id' => $whkey['h_q_id']);
							$quali_wt_course = $this->alldata_model->sortingWheredata('*', 'tbl_highest_qualification_course', $where_wt, 'h_q_c_name', 'ASC'); 
							foreach($quali_wt_course as $wt_cous){
								$where_wt_cs = array('fk_h_q_c_id' => $wt_cous['h_q_c_id']);
								$quali_wt_specil = $this->alldata_model->sortingWheredata('*', 'tbl_highest_qualification_course_specilize', $where_wt_cs, 'h_q_c_s_name', 'ASC'); 
								 foreach($quali_wt_specil as $wt_spcl){ 
									 if($wt_spcl['h_q_c_s_id'] == $arr){  
										//echo "WHITE ID ".$wt_spcl['h_q_c_s_id'];
										//echo $wt_spcl['h_q_c_s_name']; 
										//$data['h_q_c_s_name'] = $bl_spcl['h_q_c_s_name']; 
										//array_push($data['spec_arr1'],$wt_spcl['h_q_c_s_name']);
										array_push($data['spec_arr'],$wt_spcl['h_q_c_s_name']);
									}
								 } 
							} 
						}
			}
			}
			
		} if($dl_qutn_type=='placement'){
			//echo "inplace <pre>";print_r($data['blue_hight']);echo "</pre>";
			//echo "<pre>";print_r($data['white_hight']);echo "</pre>";
			$data['mrfdetail'] = $this->alldata_model->DetailData('tbl_MRF_placement', array('pla_id' => $dl_qutn_id));
			
			
			
			$qualifi = $data['mrfdetail'][0]['mr_qualification'];
			$expldoe_quali = explode("|",$qualifi);
			for($z=0;$z<count($expldoe_quali);$z++){			
				$data['spec_qual'] = array();
				$data['spec_white'] = array();
				$data['spec_arr'] = array();
				$plus_explode=explode("+",$expldoe_quali[$z]);
				$data['plus_exxp'] =$plus_explode;
				foreach ($data['blue_hight'] as $blkey) {
					$where_bl = array('fk_h_q_id' => $blkey['h_q_id']);
					$quali_bl_course = $this->alldata_model->sortingWheredata('*', 'tbl_highest_qualification_course', $where_bl, 'h_q_c_name', 'ASC'); 
					
					foreach($quali_bl_course as $bl_cous){
						
						$where_bl_cs = array('fk_h_q_c_id' => $bl_cous['h_q_c_id']);
						$quali_bl_specil = $this->alldata_model->sortingWheredata('*', 'tbl_highest_qualification_course_specilize', $where_bl_cs, 'h_q_c_s_name', 'ASC');
						//echo "BLUE <pre>";print_r($quali_bl_specil);echo "</pre>";
						foreach($quali_bl_specil as $bl_spcl){ 
							for ($ik = 0; $ik < count($plus_explode); $ik++){
								if($bl_spcl['h_q_c_s_id'] == $plus_explode[$ik]){
									//echo "BLUE----".$bl_spcl['h_q_c_s_id']."==".$plus_explode[$ik];
									$bl='('.$bl_cous["h_q_c_name"].')-'.$bl_spcl["h_q_c_s_name"].'';
									$data['blue_qual']='<span style="border: 1px solid #454a4c;margin-right: 20px;text-transform: uppercase;padding-left: 50pt;font-size: 12px;margin-top: 50px;background-color: #7b8082;color: #fff;text-align: center;white-space: nowrap;">('.$bl_cous["h_q_c_name"].')   -  '.$bl_spcl["h_q_c_s_name"].'</span>';
									array_push($data['spec_arr'],$bl);
								}
							}
						}
					}
				}
				
				// WHITE //
				foreach ($data['white_hight'] as $whkey) {
					$where_wt = array('fk_h_q_id' => $whkey['h_q_id']);
					$quali_wt_course = $this->alldata_model->sortingWheredata('*', 'tbl_highest_qualification_course', $where_wt, 'h_q_c_name', 'ASC'); 
					foreach($quali_wt_course as $wt_cous){
						$where_wt_cs = array('fk_h_q_c_id' => $wt_cous['h_q_c_id']);
						$quali_wt_specil = $this->alldata_model->sortingWheredata('*', 'tbl_highest_qualification_course_specilize', $where_wt_cs, 'h_q_c_s_name', 'ASC');
						//echo "WHITE <pre>";print_r($quali_wt_specil);echo "</pre>";
						foreach($quali_wt_specil as $wt_spcl){ 
							for ($ik = 0; $ik < count($plus_explode); $ik++){
								if($wt_spcl['h_q_c_s_id'] == $plus_explode[$ik]){ 
									//echo "WHITE----".$wt_spcl['h_q_c_s_id']."==".$plus_explode[$ik];
									$wh='('.$wt_cous["h_q_c_name"].')-'.$wt_spcl["h_q_c_s_name"].'';
									$data['white_qual']='<span style="border: 1px solid #454a4c;margin-right: 20px;text-transform: uppercase;padding-left: 50pt;font-size: 12px;margin-top: 50px;background-color: #7b8082;color: #fff;text-align: center;white-space: nowrap;">( '.$wt_cous["h_q_c_name"].')   -   '.$wt_spcl["h_q_c_s_name"].'</span>';
									array_push($data['spec_arr'],$wh);									
								}									
							}
						}
							
					}
				}
				//echo "BLUE <pre>";print_r($data['spec_blue']);echo "</pre>";
				//echo "WHITE <pre>";print_r($data['spec_white']);echo "</pre>";
				$qual[$z]=$data['spec_arr'];
			}
			
			//echo "<pre>";print_r($data);echo "</pre>";
		}
//		$data['preinfo'] = $this->alldata_model->DetailData('tbl_quot_preinformation',$where);
		$data['qlf'] = $qual;
		// placement //
//		$data['mrfdetail'] = $this->alldata_model->DetailData('tbl_MRF_placement', array('pla_id' => $dl_qutn_id));
		$data['verticle'] = $this->alldata_model->getDatamodel('tbl_quot_verticle_design');
		$data['position'] = $this->alldata_model->getDatamodel('tbl_position');
		$data['industries'] = $this->alldata_model->getDatamodel('tbl_lead_industries');
		$data['keyskill'] = $this->alldata_model->sortingWheredata("*", 'tbl_keyskill');
//		$data['blue_hight'] = $this->alldata_model->DetailData('tbl_highest_qualification',array('h_q_type'=>'BLUE'));
//		$data['white_hight'] = $this->alldata_model->DetailData('tbl_highest_qualification',array('h_q_type'=>'WHITE'));
		
		$data['dl_qutn_type'] = $dl_qutn_type;
		echo json_encode($data);
	}
	public function quoteverticles(){
		$qun_id = $this->input->post("qun_id");
		$qun_type = $this->input->post("qun_type");
		$csd_id = $this->input->post("csd_id");
		if($qun_type=='custom'){
			$where=array('cus_id'=>$qun_id);
			$selectdata='cus_id,person as pers';
			$table='tbl_quot_custom_new  as cn';
			$data['quote_verticles'] = $this->model->getQuoteVerticles($where,$selectdata,$table);
		}else if($qun_type=='lumsum'){
			$where=array('lqe_id'=>$qun_id);
			$selectdata='lqe_id,no_of_person as pers';
			$table='tbl_quot_lumsum  as cn';
			$data['quote_verticles'] = $this->model->getQuoteVerticles($where,$selectdata,$table);
		}else if($qun_type=='placement'){
			$where=array('csd_id'=>$csd_id);
			$data['dpo_placement'] = $this->model->getDPOPlacementData($where);
	
			$data['dl_lid'] = $data['dpo_placement'][0]['l_id'];
			$data['dl_qutn_id'] = $data['dpo_placement'][0]['qutn_id'];
			$data['dl_qutn_type'] = $data['dpo_placement'][0]['qutn_type'];
			
			// placement //
			$data['mrfdetail'] = $this->alldata_model->DetailData('tbl_MRF_placement', array('pla_id' =>$data['dl_qutn_id']));
			//echo "<pre>";print_r($data['mrfdetail']);echo "</pre>";
			$data['verticle'] = $this->alldata_model->getDatamodel('tbl_quot_verticle_design');
			$data['position'] = $this->alldata_model->getDatamodel('tbl_position');
			$data['industries'] = $this->alldata_model->getDatamodel('tbl_lead_industries');
			$data['keyskill'] = $this->alldata_model->sortingWheredata("*", 'tbl_keyskill');
//			$data['blue_hight'] = $this->alldata_model->DetailData('tbl_highest_qualification',array('h_q_type'=>'BLUE'));
			//$data['white_hight'] = $this->alldata_model->DetailData('tbl_highest_qualification',array('h_q_type'=>'WHITE'));			
//			$data['white_hight'] = $this->alldata_model->DetailData('tbl_highest_qualification',array('h_q_type'=>'WHITE'));
			$blue_hight = $this->alldata_model->DetailData('tbl_highest_qualification',array('h_q_type'=>'BLUE'));
			$white_hight = $this->alldata_model->DetailData('tbl_highest_qualification',array('h_q_type'=>'WHITE'));
			if(count($data['mrfdetail'])>0){
				$edu = $data['mrfdetail'][0]['mr_qualification'];
				$mr_position = $data['mrfdetail'][0]['mr_position'];
				$exp_pos = explode("|",$mr_position);
			
			//echo "<br/>";
			
			
			$arr=array();
			$data['spec_arr'] = array();
			$data['spec_arr1'] = array();
			for($i=0;$i<count($exp_pos);$i++){
				//echo "I is::".$i;
				//echo "<br/>";
				$explode_edu = explode("|",$edu);
				$arr=$explode_edu[$i];
				foreach ($blue_hight as $blkey) {
				$where_bl = array('fk_h_q_id' => $blkey['h_q_id']);
				$quali_bl_course = $this->alldata_model->sortingWheredata('*', 'tbl_highest_qualification_course', $where_bl, 'h_q_c_name', 'ASC');							
				foreach($quali_bl_course as $bl_cous){
					$where_bl_cs = array('fk_h_q_c_id' => $bl_cous['h_q_c_id']);
					$quali_bl_specil = $this->alldata_model->sortingWheredata('*','tbl_highest_qualification_course_specilize', $where_bl_cs, 'h_q_c_s_name', 'ASC'); 
								
					foreach($quali_bl_specil as $bl_spcl){ 
						if($bl_spcl['h_q_c_s_id'] == $arr){	
//echo "BLUE ID ".$bl_spcl['h_q_c_s_id'];						
							//$data['h_q_c_s_name'] = $bl_spcl['h_q_c_s_name']; 
							array_push($data['spec_arr'],$bl_spcl['h_q_c_s_name']);
						} 
					}
				}
				}
				foreach ($white_hight as $whkey) {
							$where_wt = array('fk_h_q_id' => $whkey['h_q_id']);
							$quali_wt_course = $this->alldata_model->sortingWheredata('*', 'tbl_highest_qualification_course', $where_wt, 'h_q_c_name', 'ASC'); 
							foreach($quali_wt_course as $wt_cous){
								$where_wt_cs = array('fk_h_q_c_id' => $wt_cous['h_q_c_id']);
								$quali_wt_specil = $this->alldata_model->sortingWheredata('*', 'tbl_highest_qualification_course_specilize', $where_wt_cs, 'h_q_c_s_name', 'ASC'); 
								 foreach($quali_wt_specil as $wt_spcl){ 
									 if($wt_spcl['h_q_c_s_id'] == $arr){  
										//echo "WHITE ID ".$wt_spcl['h_q_c_s_id'];
										//echo $wt_spcl['h_q_c_s_name']; 
										//$data['h_q_c_s_name'] = $bl_spcl['h_q_c_s_name']; 
										//array_push($data['spec_arr1'],$wt_spcl['h_q_c_s_name']);
										array_push($data['spec_arr'],$wt_spcl['h_q_c_s_name']);
									}
								 } 
							} 
						}
				}
			}
			
			
		}		
		echo json_encode($data);
	}
	/*public function getQualifi_blue(){
		$where_bl = $this->input->post("where_bl");
		$where = array('fk_h_q_id'=>$where_bl);
		$data['blue_quali'] = $this->alldata_model->sortingWheredata('*', 'tbl_highest_qualification_course', $where, 'h_q_c_name', 'ASC');
		echo json_encode($data);
	}
	public function getspecialization_blue(){
		$where_bl_cs = $this->input->post("where_bl_cs");
		$where = array('fk_h_q_c_id'=>$where_bl_cs);
		$data['blue_specialize'] = $this->alldata_model->sortingWheredata('*', 'tbl_highest_qualification_course_specilize', $where, 'h_q_c_s_name', 'ASC'); 
		echo json_encode($data); 
	}*/
	public function getQualifi_blue(){
		//$blue_hight = $this->alldata_model->DetailData('tbl_highest_qualification',array('h_q_type'=>'BLUE'));
		//foreach ($blue_hight as $blkey) {
			$where_bl = $this->input->post("where_bl");
			$qualifi = $this->input->post("qualifi");//die;
			$where = array('fk_h_q_id'=>$where_bl);
			$quali_bl_course = $this->alldata_model->sortingWheredata('*', 'tbl_highest_qualification_course', $where, 'h_q_c_name', 'ASC');
			foreach($quali_bl_course as $bl_cous){
				$where_bl_cs = array('fk_h_q_c_id' => $bl_cous['h_q_c_id']);
				$quali_bl_specil = $this->alldata_model->sortingWheredata('*', 'tbl_highest_qualification_course_specilize', $where_bl_cs, 'h_q_c_s_name', 'ASC'); 
				foreach($quali_bl_specil as $bl_spcl){ 
					//echo $bl_spcl['h_q_c_s_id']."==".$qualifi."<br/>";
					if($bl_spcl['h_q_c_s_id'] == $qualifi){ 
						echo $bl_spcl['h_q_c_s_name']; 
					}
				}
			}
		//}
	}
	public function registerCandidate(){
		//echo "<pre>";print_r($_POST);echo "</pre>";//die;
		$name = $this->input->post("name");
		$state = $this->input->post("state");		
		$district = $this->input->post("district"); 
		$city = $this->input->post("city");
		$primary_mobile_number = $this->input->post("primary_mobile_number");
		$secondary_mobile_number = $this->input->post("secondary_mobile_number");
		//$dob = date("Y-m-d",strtotime($this->input->post("dob")));
		$dob_dt = $this->input->post("dob_dt");
		$dob_mnth = $this->input->post("dob_mnth");
		$dob_yr = $this->input->post("dob_yr");
		$dob = $dob_yr."-".$dob_mnth."-".$dob_dt;
		$gender = $this->input->post("gender");
		$collar_type = $this->input->post("collar_type");
		$high_qualification = $this->input->post("high_qualification");		
		$firstField = $this->input->post("firstField");
		$position = $this->input->post("position");
		$job_function = $this->input->post("job_function");
		$exp_years = $this->input->post("exp_years"); 
		$exp_month = $this->input->post("exp_month");
		$email = strtolower($this->input->post("email"));
		$password = $this->input->post("password");
		$confirm_password = $this->input->post("confirm_password");
		$mode = 'APP';
		$created_by = $this->input->post("session_uid");
		$cand_reg_form = 'fo';		
		$regtype='PROVISIONAL';		
		$cndData = $this->model->getEmailMobile($email,$primary_mobile_number);
		if(count($cndData) > 0){
			echo "exists";
		}else{
			if($city=='other'){
				$last_city_id = NULL;
			}else{
				$cityData = $this->alldata_model->DetailData("tbl_city_erp", array('c_id' => $city));
				$stateId = $cityData[0]['s_id'];
				$talukaId = $cityData[0]['d_id'];
				$city_Id = $cityData[0]['c_id'];
				$last_city_id = $city;
			}
		}
		
		$place = $this->model->maxdata('provcode','tbl_candidate','NULL');
		$code = $place[0]['provcode'];
		if ($code != NULL) {
			$exp = explode('PRO', $code);
			$one = $exp[1];
		} else {
			$exp = 0;
			$one = $exp;
		}
		$one = $exp[1];
		$codeplus = ++$one;
		$procode = sprintf("%06d", $codeplus);
		$prov_code = 'PRO'.$procode;
		if($job_function!=''){
			$applied_for_string = implode(",", $job_function);
		}else{
			$applied_for_string = '';
		}
		if($position!=''){
			$additional_position_string = implode(",", $position);
		}else{
			$additional_position_string = '';
		}
		
		$insertdata = array(
			'cand_fname'=>$name,
			'cand_state'=>$state,
			'cand_dist'=>$district,
			'cand_current_city_np'=>$city,
			'cand_current_city'=>$city,
			'cand_mobile'=>$primary_mobile_number,
			'secondry_mobile'=>$secondary_mobile_number,
			'cand_dob'=>$dob,
			'cand_gender'=>$gender,
			'cand_collor_type'=>$collar_type,
			//'cand_password'=>md5($password),
            //'cand_re_pass'=>$confirm_password,
			'cand_password'=>md5($primary_mobile_number),   
			'cand_re_pass'=>$primary_mobile_number,			
			'cand_email'=>$email,
			'cand_experiance_year'=>$exp_years,
			'cand_experiance_mnth'=>$exp_month,
			'applied_for'=>$applied_for_string,
			'additional_position'=>$additional_position_string,
			'cand_reg_from' =>$cand_reg_form,
			'mode'=>$mode,
			'provcode'=>$prov_code,
			'reg_type'=>$regtype,
			'created_by'=>$created_by,
			'cand_create_date' => date('Y-m-d')
		);
		//echo "<pre>";print_r($insertdata);echo "</pre>";//die;
		$this->alldata_model->insertData('tbl_candidate', $insertdata);
		$candi = $this->db->insert_id();
		if ($collar_type == "BLUE") {
			$can_data_where = array('cand_id' => $candi);
			$this->alldata_model->UpdateData('tbl_candidate', array("reg_type" => "REGISTRED"), $can_data_where);
			$this->db->select_max('reg_num');
			$reg_num = $this->db->get('tbl_candidate')->row("reg_num");
			$reg_num = $reg_num + 1;
			$updateTBL = array(
				'reg_num' => $reg_num
			);
			//print_r($updateTBL);
		   $this->alldata_model->UpdateData('tbl_candidate', $updateTBL, array("cand_id" => $candi));
		}	
		//echo "COUNT:: ".count($firstField);
		/*if (count($firstField) != 0) {
			for ($i = 0; $i < count($firstField); $i++) {
				if ($firstField[$i] != "") {
					$quiData = $this->alldata_model->DetailData('tbl_highest_qualification_course_specilize', array('h_q_c_s_id' => $firstField[$i]));
					$insertedu = array(
						'cand_id' => $candi,
						'course' => $quiData[0]['h_q_c_s_name'],
						'course_id' => $quiData[0]['fk_h_q_c_id'],
						'speci_id' => $quiData[0]['h_q_c_s_id'],
					);
					echo "<pre>";print_r($insertedu);echo "</pre>";//die;
					$this->alldata_model->InsertData('tbl_candidate_qualification', $insertedu);
				}
			}
		}*/
		
		
		if ($firstField != "") {
			$quiData = $this->alldata_model->DetailData('tbl_highest_qualification_course_specilize', array('h_q_c_s_id' => $firstField));
			$insertedu = array(
				'cand_id' => $candi,
				'course' => $quiData[0]['h_q_c_s_name'],
				'course_id' => $quiData[0]['fk_h_q_c_id'],
				'speci_id' => $quiData[0]['h_q_c_s_id'],
			);
			//echo "<pre>";print_r($insertedu);echo "</pre>";//die;
			$this->alldata_model->InsertData('tbl_candidate_qualification', $insertedu);
		}
		
		 
		//----------------------------------- SMS -----------------------------------//
		$code = $this->model->generate_code();
		$where = array('cand_id' => $candi);
        $data1 = array('cand_verify_code' => $code);
        $this->alldata_model->UpdateData('tbl_candidate', $data1, $where);
		$message1 = "Thank you for Registering with Cosmos !\n"
                    . "Your Provisional Registration No. is : $prov_code \n"
                    . "Your User ID is : $primary_mobile_number\n"
                    . "Your Password is : $confirm_password\n"
                    . "Team Cosmos.";
		$this->model->smssend($primary_mobile_number, $message1);
		$message2 = ""
                    . "Your verification Code is :$code\n"
                    . "Click here to login and complete your Profile : https://www.mycosmosjobs.com/welcome/candidateLoginPage\n"
                    . "Team Cosmos.";
        $this->model->smssend($primary_mobile_number, $message2);
		$enjobid = $this->alldata_model->encryptdata($candi);
		$link1 = base_url() . "candidate/Autologin/" . $enjobid . "";
		$link1 = str_replace("erp/cosmos2/", "", $link1);		
		$msg = '';
		$msg.="<div style='color:#333;'><!--- Start: content --><p>Thank You for registering with MyCosmosJob.! <br/></p><p style='border-bottom: 1px solid #BEDAF1;padding-bottom: 10px;'>Your credentials will be as bellow.</p><table><tr><td>Your username is :</td><td>" . $primary_mobile_number . "</td><tr><tr><td>Your password is :</td><td>" . $confirm_password . "</td><tr></table>
		<p>Please click on following link to activate your registration and upload your resume.</p>
		<p>Your link goes here</p><p><a href='" . $link1 . "'>Click To verify E-mail</a></p>
		<p>If there is an appropriate match with an open position then  we will contact you within few days,Otherwise, Your resume will be maintained in our database and your qualification will be considered for any future openings.</p>
		<p>Thanks again and good luck in your job search.</p><p style='font-weight: bold;'>Please do not reply on this email.This email is notification email </p>
		</div>";
		$this->model->emailSendFormat($email, 'Registering with MyCosmosJob', $msg, $regard = 'MycosmosJobs', $topmenu = 'candidate');	
		echo "registered"; 
	}
	public function pro_list(){
		$uid = $this->input->post("uid");
		$session_ulevel = $this->input->post("session_ulevel");
		$searchwhere='NULL';
		$data['proList'] = $this->model->provisionalList($uid,$session_ulevel,$searchwhere); 
		echo json_encode($data);
	}
	public function statusorinterview(){
		$cand_id = $this->input->post("cand_id");
		$st_or_int = $this->model->get_last_intstatus($cand_id);
		//echo json_encode($data);
		echo count($st_or_int);
	}
	public function newBusinessList(){
		$data['bus_dev'] = $this->alldata_model->getDatamodel("tbl_business_development");
		echo json_encode($data);
	}
	public function addDevelopment(){
		//echo "<pre>";print_r($_POST);echo "</pre>";die;
		$location=$this->input->post("location");		
		$company=$this->input->post("company");
		$ind_type=$this->input->post("ind_type");
		$product=$this->input->post("product");
		//$start_date=date("Y-m-d",strtotime($this->input->post("start_date")));		
		$start_day = $this->input->post("start_day");
		$start_mnth = $this->input->post("start_mnth");
		$start_yr = $this->input->post("start_yr");		
		if($start_day==''){
			$start_day="00";
		}else{
			$start_day=$start_day;
		}
		
		if($start_mnth==''){
			$start_mnth="00";
		}else{
			if($start_mnth > 9){
				$start_mnth=$start_mnth;
			}else{
				$start_mnth="0".$start_mnth;
			}
		}
		
		if($start_yr==''){
			$start_yr="0000";
		}else{
			$start_yr=$start_yr;
		}
		$start_date = $start_yr."-".$start_mnth."-".$start_day;		
		$cont_person=$this->input->post("cont_person");
		$cont_no=$this->input->post("cont_no");
		$email=$this->input->post("email");
		$website=$this->input->post("website");
		$remarks=$this->input->post("remarks");
		$created_by=$this->input->post("session_uid");		
		$insert_dev=array(
			"bd_type"=>"Development",
			"bd_location"=>$location,
			"bd_company"=>$company,
			"bd_industry"=>$ind_type,
			"bd_product"=>$product,
			"bd_start_date"=>$start_date,
			"bd_person_name"=>$cont_person,
			"bd_contact"=>$cont_no,
			"bd_email"=>$email,
			"bd_web_address"=>$website,
			"bd_remark"=>$remarks,
			"bd_create_by"=>$created_by,
			"bd_create_on" => date("Y-m-d h:i:s"),
			"bd_mode"=>'APP'
		);
		//echo "<pre>";print_r($insert_dev);echo "</pre>";die;
		$this->alldata_model->insertData("tbl_business_development", $insert_dev);
		$inserted = $this->db->affected_rows();
		if($inserted==1){
			echo "inserted";
		}else{
			echo "not";
		}
	}
	public function addCompetitior(){
		//echo "<pre>";print_r($_POST);echo "</pre>";die;
		$name = $this->input->post("name");		
		$address = $this->input->post("address");
		$cont_person = $this->input->post("cont_person");
		$cont_no = $this->input->post("cont_no");
		$email = $this->input->post("email");
		$services = $this->input->post("services");
		$headcounts = $this->input->post("headcounts");
		$salary = $this->input->post("salary");
		$service_charge = $this->input->post("service_charge");
		$duty_hours = $this->input->post("duty_hours");		
		$client_ref = $this->input->post("client_ref");
		$remarks = $this->input->post("remarks");
		$created_by = $this->input->post("session_uid");		
		$insert_comp=array(
			'bd_type'=>"Competitor",
			'bd_company'=>$name,
			'bd_person_name'=>$cont_person,
			'bd_contact'=>$cont_no,
			'bd_email'=>$email,
			'bd_remark'=>$remarks,
			'bd_address'=>$address,
			'bd_headcount'=>$headcounts,
			'bd_service'=>$services,
			'bd_salary'=>$salary,
			'bd_duty_hrs'=>$duty_hours,
			'bd_servicecharge'=>$service_charge,
			'bd_client_ref'=>$client_ref,
			'bd_create_by'=>$created_by,
			'bd_create_on'=>date("Y-m-d h:i:s"),
			'bd_mode'=>'APP'
		);
		$this->alldata_model->insertData("tbl_business_development", $insert_comp);
		$inserted = $this->db->affected_rows();
		if($inserted==1){
			echo "inserted";
		}else{
			echo "not";
		}
	}
	public function businessDet(){
		$bd_id = $this->input->post("bd_id");
		$where = array('bd_id' => $bd_id);
		//$data['business_det'] = $this->alldata_model->DetailData("tbl_business_development", array('bd_id' => $bd_id));
		$data['business_det'] = $this->model->getbusinessDet($where);
		echo json_encode($data);
	}
	public function updateBusinessData(){
		$bd_id = $this->input->post("bd_id");
		$bd_type = $this->input->post("bd_type");
		
	}
	public function editDevComp(){
		//echo "<pre>";print_r($_POST);echo "</pre>";die;
		$hidd_bd_id = $this->input->post("hidd_bd_id");
		$hidd_bd_type = $this->input->post("hidd_bd_type");
		if($hidd_bd_type=='Development'){
			$location=$this->input->post("location");		
			$company=$this->input->post("company");
			$ind_type=$this->input->post("ind_type");
			$product=$this->input->post("product");
			$start_date=date("Y-m-d",strtotime($this->input->post("start_date")));
			$cont_person=$this->input->post("cont_person");
			$cont_no=$this->input->post("cont_no");
			$email=$this->input->post("email");
			$website=$this->input->post("website");
			$remarks=$this->input->post("remarks");
			$created_by=$this->input->post("session_uid");
			$update_business=array(
				"bd_type"=>"Development",
				"bd_location"=>$location,
				"bd_company"=>$company,
				"bd_industry"=>$ind_type,
				"bd_product"=>$product,
				"bd_start_date"=>$start_date,
				"bd_person_name"=>$cont_person,
				"bd_contact"=>$cont_no,
				"bd_email"=>$email,
				"bd_web_address"=>$website,
				"bd_remark"=>$remarks,
				//"bd_create_by"=>$created_by,
				//"bd_create_on" => date("Y-m-d h:i:s"),
				//"bd_mode"=>'APP'
			);
		}else if($hidd_bd_type=='Competitor'){
			$name = $this->input->post("name");		
			$address = $this->input->post("address");
			$cont_person = $this->input->post("cont_person");
			$cont_no = $this->input->post("cont_no");
			$email = $this->input->post("email");
			$services = $this->input->post("services");
			$headcounts = $this->input->post("headcounts");
			$salary = $this->input->post("salary");
			$service_charge = $this->input->post("service_charge");
			$duty_hours = $this->input->post("duty_hours");		
			$client_ref = $this->input->post("client_ref");
			$remarks = $this->input->post("remarks");
			$created_by = $this->input->post("session_uid");
			$update_business=array(
				'bd_type'=>"Competitor",
				'bd_company'=>$name,
				'bd_person_name'=>$cont_person,
				'bd_contact'=>$cont_no,
				'bd_email'=>$email,
				'bd_remark'=>$remarks,
				'bd_address'=>$address,
				'bd_headcount'=>$headcounts,
				'bd_service'=>$services,
				'bd_salary'=>$salary,
				'bd_duty_hrs'=>$duty_hours,
				'bd_servicecharge'=>$service_charge,
				'bd_client_ref'=>$client_ref,
				//'bd_create_by'=>$created_by,
				//'bd_create_on'=>date("Y-m-d h:i:s"),
				//'bd_mode'=>'APP'
			);
		}
		//echo "<pre>";print_r($update_business);echo "</pre>";die;
		$where=array('bd_id'=>$hidd_bd_id);
		$this->alldata_model->UpdateData("tbl_business_development", $update_business,$where);
		echo $updated = $this->db->affected_rows();
		if($updated==1){
			echo "updated";
		}else{
			echo "not";
		} 
	}
	public function feedbacks(){
		$session_ulevel=$this->input->post("session_ulevel");
		$uid=$this->input->post("uid");
		$searchwhere='NULL';
		$data['feedback']=$this->model->getFeedbacks($session_ulevel,$uid,$searchwhere);
		echo json_encode($data); 
	}
	public function getdcr(){
		$l_id = $this->input->post("l_id");
		$dcr = $this->alldata_model->sortingWheredata("csd_id","tbl_field_visit",array('l_id'=>$l_id),"NULL");
		echo count($dcr);  
	}
	public function getdcrcsd_id(){
		$csd_id = $this->input->post("csd_id");
		$dcrcsd = $this->alldata_model->sortingWheredata("csd_id","tbl_field_visit",array('csd_id'=>$csd_id),"NULL");
		echo count($dcrcsd);
	}
	public function feedbk_det(){
		$fb_id = $this->input->post("fb_id");
		//$data['f_dets'] = $this->alldata_model->DetailData("tbl_company_feedback",array('fb_id'=>$fb_id));
		//$data['f_comp'] = $this->alldata_model->DetailData("tbl_customer",array('cs_process_status'=>'customer'));
		$data['f_dets'] = $this->model->getFeedBackDets($fb_id);
		echo json_encode($data);
	}
	public function getCompanies(){
		$data['f_comp'] = $this->alldata_model->DetailData("tbl_customer",array('cs_process_status'=>'customer'));
		echo json_encode($data);
	}
	public function addFeedback(){
		//echo "<pre>";print_r($_POST);echo "</pre>";
		$name = $this->input->post("name");		
		$site_address = $this->input->post("site_address");
		$cont_person = $this->input->post("cont_person");
		$designation = $this->input->post("designation");
		$service = $this->input->post("service");
		$response = $this->input->post("response");
		$person_behave = $this->input->post("person_behave");
		$comp_handle = $this->input->post("comp_handle");
		$price = $this->input->post("price");
		$document = $this->input->post("document");
		$performance = $this->input->post("performance");
		$any_suggestions = $this->input->post("any_suggestions");
		$created_by = $this->input->post("created_by");		
		//$comp = $this->alldata_model->DetailData("tbl_customer",array('cs_invoice_name'=>$name));
		//echo "<pre>";print_r($comp);echo "</pre>";
		//echo $cs_id = $comp[0]['cs_id'];
		$insert_feedback=array(
			'cs_id'=>$name,
			//'fb_srno'=>
			'fb_date'=>date('Y-m-d'),
			'fb_address'=>$site_address,
			'fb_contact_person'=>$cont_person,
			'fb_designation'=>$designation,
			'fb_cmt_services'=>$service,
			'fb_cmt_behaviour'=>$person_behave,
			'fb_cmt_response'=>$response,
			'fb_cmt_complain'=>$comp_handle,
			'fb_cmt_price'=>$price,
			'fb_cmt_document'=>$document,
			'fb_cmt_performance'=>$performance,
			'fb_suggetion'=>$any_suggestions,
			//'fb_feedback_attach'=>$feedback,
			'fb_create_by' => $created_by,			
		);
		$this->alldata_model->insertData('tbl_company_feedback', $insert_feedback);
		echo $last_id = $this->db->insert_id();

	}
	public function photoupload($sess_u_id,$insert_id,$old_userPic,$imgfilename){
		$filenm = $_FILES["file"]['name'];
		$getfilenm = explode("?",$filenm);
		$name = $getfilenm[0];
		//$name = $imgfilename;
        move_uploaded_file($_FILES["file"]["tmp_name"], './feedback/'. $name);
		$userfile_path = "feedback/".$name; 
		$userfile_path=$userfile_path;
		$update_attach =array(
			'fb_feedback_attach'=>$userfile_path,
		);		 
		$where=array("fb_id"=>$insert_id);		
		$this->alldata_model->updateData("tbl_company_feedback",$update_attach,$where);
	}
	public function interviewList(){
		$uid = $this->input->post("uid");
		$session_ulevel = $this->input->post("session_ulevel");
		$session_department = $this->input->post("session_department");
		$where = array('cs.cs_delete' => 1, 'cs.cs_process_status' => 'customer');
		$order = 'cs.cs_id DESC';
		$searchwhere='NULL';
		$data['int_list'] = $this->model->listInterView($where,$uid,$session_ulevel,$order,$searchwhere,$session_department);
		echo json_encode($data);
	}
	public function interviewStatus(){
		$cs_id = $this->input->post("cs_id");
		$data['int_status'] = $this->model->interview_list_status($cs_id);
		echo json_encode($data);
	}
	public function inter_Status(){
		$data['inter_status'] = $this->alldata_model->getDatamodel('tbl_interview_status');
		echo json_encode($data);
	}
	public function addInterviewStatus(){
		//echo "<pre>";print_r($_POST);echo "</pre>";
		$int_st = $this->input->post("int_st");
		$int_dtime = date("Y-m-d h:i:s",strtotime($this->input->post('int_dtime')));
		$reason = $this->input->post("reason");
		$hidd_cand_cmp_id = $this->input->post("hidd_cand_cmp_id");
		$session_uid = $this->input->post("session_uid");
		if($int_dtime!=''){
			if($int_dtime=='1970-01-01 05:30:00'){
				$int_date_time = "0000-00-00 00:00:00";
			}else{
				$int_date_time = $int_dtime;
			}
		}else if($int_dtime==''){
			$int_date_time = "0000-00-00 00:00:00";
		}
		if($int_st=="YES" || $int_st == 'NO'){
			$intr_status = NULL;
            $intstatus = $int_st;
		}else{
			$intstatus = '';
            $intr_status = $int_st;
		}			
		$updateArray = array(
			'i_status'=>$intr_status,
			'int_status' => $intstatus,
			'int_date_time' => $int_date_time,
			'reason' => $reason,
			'created_by' => $session_uid,
			'created_at' => date("Y-m-d h:i:s"),
		);
		$where = array("cand_cmp_id" => $hidd_cand_cmp_id);
		$this->alldata_model->UpdateData('tbl_candidate_company', $updateArray, $where);
		$candid = $this->alldata_model->sortingWheredata("cand_id", 'tbl_candidate_company', $where, 'NULL'); 
		$inserdata = array(
			'cand_id' => $candid[0]['cand_id'],
			'fk_cand_cmp_id' => $hidd_cand_cmp_id,
			'i_status' => $intr_status,
			'int_date_time' => $int_date_time,
			'reason' => $this->input->post("reason"),
			'created_at' => date("Y-m-d h:i:s")
		);
		$this->alldata_model->insertData('tbl_candidate_interviews', $inserdata);
		$inserted = $this->db->affected_rows();
		if($inserted==1){
			echo "inserted";
		}else{
			echo "not";
		}
	}
	public function selCandidateList(){
		$uid = $this->input->post("uid");
		$session_ulevel = $this->input->post("session_ulevel");		
		$session_department = $this->input->post("session_department");
		$where = array('cs.cs_delete' => 1, 'cs.cs_process_status' => 'customer');
		$searchwhere='NULL';
		$data['candidates_sel'] = $this->model->selectedCandis($uid,$session_ulevel,$where,$searchwhere,$session_department);
		echo json_encode($data);
	}
	public function candselStatus(){
		$cs_id = $this->input->post("cs_id");
		$searchwhere='NULL';
		$data['selc_status'] = $this->model->list_selected_status($cs_id,$searchwhere);
		echo json_encode($data);
	}
	public function addCandJoinDate(){
		//echo "<pre>";print_r($_POST);echo "</pre>";die;
		//$join_dt = $this->input->post("join_dt");
		
		$join_day = $this->input->post("join_day");
		$join_mnth = $this->input->post("join_mnth");
		$join_yr = $this->input->post("join_yr");
		
		if($join_day==''){
			$join_day="00";
		}else{
			$join_day=$join_day;
		}
		
		if($join_mnth==''){
			$join_mnth="00";
		}else{
			if($join_mnth > 9){
				$join_mnth=$join_mnth;
			}else{
				$join_mnth="0".$join_mnth;
			}
		}
		
		if($join_yr==''){
			$join_yr="0000";
		}else{
			$join_yr=$join_yr;
		}
		$join_dt = $join_yr."-".$join_mnth."-".$join_day;		
		
		$hidd_cand_id = $this->input->post("hidd_cand_id");
		$session_uid = $this->input->post("session_uid");		
		$updateArray = array(
			//'int_joineedate'=>date("Y-m-d h:i:s",strtotime($join_dt)),
			'int_joineedate'=>$join_dt,
			'created_by'=>$session_uid,
			'created_at'=>date("Y-m-d h:i:s")
		);
		//echo "<pre>";print_r($updateArray);echo "</pre>";die;
		$where = array("cand_cmp_id"=>$hidd_cand_id);
		$this->alldata_model->UpdateData('tbl_candidate_company', $updateArray, $where);
		$updated = $this->db->affected_rows();
		if($updated==1){
			echo "updated";
		}else{
			echo "not";
		}
	}
	public function employeeList(){
		$uid = $this->input->post("uid");
		$session_ulevel = $this->input->post("session_ulevel");	
		$session_department = $this->input->post("session_department");
		$where = array('cs.cs_delete' => 1, 'cs.cs_process_status' => 'customer');
		$order = 'cs.cs_id DESC';
		$searchwhere='NULL';
		$data['emp_list'] = $this->model->Empl_list($where,$order,$session_ulevel,$uid,$session_department,$searchwhere);
		echo json_encode($data); 
	}
	public function totEmps(){
		$cs_id = $this->input->post("cs_id");
		$searchwhere='NULL';
		$data['totemps'] = $this->model->list_selected_employee($cs_id,$searchwhere);
		echo json_encode($data); 
	}
	public function dailtyActivity_list(){
		$where = array('cs_delete' => 1, 'cs_process_status' => 'customer');
		$data['dailyActivity'] = $this->alldata_model->LimitWheredata('*', 'tbl_customer', $where, "cs_id asc", '10');
		echo json_encode($data); 
	}
	public function dailtyActivity_phone(){
		$cs_id = $this->input->post("cs_id");
		$where = array('cs.cs_delete' => 1, 'cs.cs_process_status' => 'customer');
		$order = "cs.cs_id asc";
		$data['dailyConts'] = $this->model->DailyListCont($cs_id,$where,$order);
		echo json_encode($data); 
	}
	public function dailtyActivityData(){
		$cs_id = $this->input->post("cs_id");
		$where = array('cs_id'=>$cs_id);
		//$data['detailData'] = $this->alldata_model->DetailData("tbl_customer_detailorder", $where);
		$data['detailData'] = $this->model->getDailyDetailData($where);
		echo json_encode($data);
	}
	public function masterDataAddactivity(){
		$data['incident'] = $this->alldata_model->getDatamodel('tbl_dcr_incident');
		$data['complain'] = $this->alldata_model->getDatamodel('tbl_dcr_complaint');
		echo json_encode($data);
	}
	public function add_activity(){
		//echo "<pre>";print_r($_POST);echo "</pre>";die;
		$verticle = $this->input->post("hidd_verticle");
		$csd_id = $this->input->post("hidd_csd");
		$l_id = $this->input->post("hidd_lid");
		$session_uid = $this->input->post("session_uid");
		$hrs_shiftA = $this->input->post("hrs_shiftA");
		$hrs_shiftB = $this->input->post("hrs_shiftB");
		$hrs_shiftC = $this->input->post("hrs_shiftC");
		$total = $this->input->post("total");
		$new_joinees = $this->input->post("new_joinees");
		$incident = $this->input->post("incident");
		$inci_remarks = $this->input->post("inci_remarks");
		$complaint = $this->input->post("complaint");
		$comp_remarks = $this->input->post("comp_remarks");
		$insert_activity = array(
			"verticle" => $verticle,
			"csd_id" => $csd_id,
			"l_id" => $l_id,
			"da_shiftA" => $hrs_shiftA,
			"da_shiftB" => $hrs_shiftB,
			"da_shiftC" => $hrs_shiftC,
			"da_total" => $total,
			"da_new_joinee" => $new_joinees,
			"da_incedent" => $incident,
			"da_incedent_remark" => $inci_remarks,
			"da_complain" => $complaint,
			"da_complain_remark" => $comp_remarks,
			"da_create_by" => $session_uid
		);
		$this->alldata_model->insertData("tbl_dcr_dailyactivity", $insert_activity);
		$inserted = $this->db->affected_rows();
		if($inserted==1){
			echo "inserted";
		}else{
			echo "not";
		}
	}
	public function getDCRcnt(){
		$csd_id = $this->input->post("csd_id");
		$dcr=$this->alldata_model->sortingWheredata("csd_id","tbl_dcr_dailyactivity",array("csd_id"=>$csd_id), "NULL");
		echo count($dcr);
		//echo json_encode($data);
	}
	public function view_activity(){
		$csd_id = $this->input->post("csd_id");
		$data['viewactivity'] = $this->model->ViewActivity($csd_id);
		echo json_encode($data);
	}
	public function getMasterdata(){		
		$session_department= $this->input->post("session_department");
		$session_uid = $this->input->post("session_uid");
		$session_ulevel = $this->input->post("session_ulevel");
		$where = array('cs_process_status'=>'customer');
		$data['f_comp'] = $this->model->getComp($where,$session_department,$session_uid,$session_ulevel);		
		//$data['f_comp']=$this->alldata_model->DetailData('tbl_customer',array('cs_process_status'=>'customer'));
		echo json_encode($data);
	}
	public function getCompany(){
		$cand_id = $this->input->post("cand_id");
		$session_department= $this->input->post("session_department");
		$uid = $this->input->post("uid");
		$u_level = $this->input->post("u_level");
		$where=array('a.cs_delete'=>1,'a.cs_process_status'=>'customer');
		$data['companies'] = $this->model->getComp($where,$session_department,$uid,$u_level);
		$data['canddet']= $this->alldata_model->DetailData("tbl_candidate",array('cand_id'=>$cand_id));
		$data['positionsBlueNew'] = $this->model->bluePosit();
		$data['positionsWhiteNew'] = $this->model->whitePosit();
		$data['interview'] = $this->alldata_model->getDatamodel('tbl_interview_status');
		echo json_encode($data);
	}
	public function addinterview(){
		//echo "<pre>";print_r($_POST);echo "</pre>";die;
		$cand_id = $this->input->post("cand_id");
		$company = $this->input->post("company");
		$position = $this->input->post("position");
		$int_status = $this->input->post("int_status");
		$reason = $this->input->post("reason");
		//$date_int = date("Y-m-d",strtotime($this->input->post("date_int")));
		$dt_day = $this->input->post("dt_day");
		$dt_mnth = $this->input->post("dt_mnth");
		$dt_yr = $this->input->post("dt_yr");
		
		if($dt_day==''){
			$dt_day="00";
		}else{
			$dt_day=$dt_day;
		}
		
		if($dt_mnth==''){
			$dt_mnth="00";
		}else{
			if($dt_mnth > 9){
				$dt_mnth=$dt_mnth;
			}else{
				$dt_mnth="0".$dt_mnth;
			}
		}
		
		if($dt_yr==''){
			$dt_yr="0000";
		}else{
			$dt_yr=$dt_yr;
		}
		$int_date_time = $dt_yr."-".$dt_mnth."-".$dt_day;
		
		$direct_interview = $this->input->post("direct_interview");
		$session_uid = $this->input->post("session_uid");
		if ($int_status == 'YES' || $int_status == 'NO') {
			$intr_status = NULL;
			$intstatus = $int_status;
		} else {
			$intstatus = '';
			$intr_status = $int_status;
		}
		/*if($date_int!= '') {
			$int_date_time = $date_int;
		} else {
			$int_date_time = "0000-00-00 00:00:00";
		}*/
		$interview_insert=array(
			'cand_id'=>$cand_id,
			'i_status'=>$intr_status,
			'int_status'=>$intstatus,
			'int_date_time'=>$int_date_time,
			'cs_id'=>$company,
			'reason'=>$reason,
			'fk_pn_id'=>$position,
			'created_by'=>$session_uid,
			'created_at'=>date("Y-m-d h:i:s"),
			'direct_interview'=>$direct_interview,
			'int_mode'=>'APP'
		);
		//echo "<pre>";print_r($interview_insert);echo "</pre>";//die;
		$this->alldata_model->insertData('tbl_candidate_company',$interview_insert);
		$log_id = $this->db->insert_id();
		
		$insert_candint=array(
			'cand_id'=>$cand_id,
			'fk_cand_cmp_id'=>$log_id,
			'i_status'=>$intr_status,
			'int_date_time'=>$int_date_time,
			'reason'=>$reason,
			'created_at'=>date("Y-m-d h:i:s")
		);
		//echo "<pre>";print_r($insert_candint);echo "</pre>";die;
		$this->alldata_model->insertData('tbl_candidate_interviews',$insert_candint);	
	}
	public function candListFind(){
		$cand_id = $this->input->post("cand_id");
		$data['employee'] = $this->model->getCandCompDet($cand_id);
		$data['int_data'] = $this->model->findfor_interview($cand_id);
		$data['selection'] = $this->model->getSelectionData($cand_id);
		echo json_encode($data);
	}
	public function showFieldVisit(){
		$cs_id = $this->input->post("cs_id");
		$where = array('cs_id' => $cs_id);
		//$data['c_order'] = $this->alldata_model->DetailData("tbl_customer_detailorder",$where);
		$data['c_order'] = $this->model->CustdetOrder($where);
		echo json_encode($data);
	}
	public function complainList(){
		$where = array('cm.cm_delete' => 1);
		$uid = $this->input->post("uid");
		$session_ulevel = $this->input->post("session_ulevel");
		$searchwhere='NULL';
		$data['comp_list'] = $this->model->getCompList($where,$uid,$session_ulevel,$searchwhere);
		echo json_encode($data);
	}
	public function view_complain(){
		$cm_id = $this->input->post("cm_id");
		$where=array('cm_id'=>$cm_id);	
		$data['company']=$this->alldata_model->getDatamodel('tbl_customer');
		$data['customer']=$this->model->getCompCust();	
		$data['employee']=$this->model->getCompemployee();
		$data['result'] = $this->alldata_model->DetailData('tbl_complain', $where);
		echo json_encode($data);		
	}
	public function add_compform(){
		$uid = $this->input->post("uid");
		$session_ulevel = $this->input->post("session_ulevel");			
		$session_department = $this->input->post("session_department");
		//$data['assign_cmpy'] = $this->model->getAssignedComp($uid,$session_ulevel);
		$where = array('cs_process_status'=>'customer');
		$data['assign_cmpy'] = $this->model->getComp($where,$session_department,$uid,$session_ulevel);
		$data['customer']=$this->model->getCompCust();	
		$data['employee']=$this->model->getCompemployee();
		echo json_encode($data);
	}
	public function getContPer(){
		$sel_comp = $this->input->post("sel_comp");
		$l_id = $this->db->get_where('tbl_customer', array('cs_id' => $sel_comp))->row("l_id");
		$data['lead_data']=$this->alldata_model->sortingWheredata("contact_person,contact_person,contact_status,contact_in_active_date,contact_no,contact_designation,contact_remarks","tbl_leads",array("l_id"=>$l_id), "NULL");
		echo json_encode($data);
	}
	public function assignedPayroll(){
		$sel_comp = $this->input->post("sel_comp");
		$u_department = $this->input->post("u_department");
		$assingn_type = $this->input->post("assingn_type");
		$data['oprn_person'] = $this->model->getPayrollPerson($sel_comp,$assingn_type,$u_department);
		echo json_encode($data);
	}
	public function getcompEmps(){
		$sel_comp = $this->input->post("sel_comp");		
		$data = $this->model->getempComps($sel_comp);
		$html = '<option value="" >SELECT EMPLOYEE</option>';
		//echo "<pre>";print_r($data);echo "</pre>";
        if (!empty($data)) {
            
			foreach ($data as $val) {
				$cand_id = $val['cand_id'];
				$cand_fname = $val['cand_fname'];
				$html .= '<option value="' . $cand_id . '" >' . $cand_fname . '</option>';
			}
        }else{
            $html = '<option value="" >SELECT EMPLOYEE</option>';
        }
		$query=$this->model->getCompemployee();
		$query1=$this->model->getCompCust();
		//echo "<pre>";print_r($query);echo "</pre>";
		if (!empty($data)) {
			$resultArrauy['employee']=$query;
			$resultArrauy['customer']=$query1;
			$resultArrauy['comp_emp'] = $data;
			$resultArrauy['status'] = 'Success';
			$resultArrauy['html'] = $html;
			echo json_encode($resultArrauy);			
		}else{
			$resultArrauy['employee']=$query;
			$resultArrauy['customer']=$query1;
			$resultArrauy['comp_emp'] = $data;
			$resultArrauy['status'] = 'error';
			$resultArrauy['html'] = $html;
			echo json_encode($resultArrauy);
		}
	}
	public function add_Complain(){
		//echo "<pre>";print_r($_POST);echo "</pre>";
		$complain_type = $this->input->post("complain_type");
		$company_name = $this->input->post("company_name");
		$cont_person = $this->input->post("cont_person");
		$recrutment_person = $this->input->post("recrutment_person");
		$hidd_recrutment_person = $this->input->post("hidd_recrutment_person");
		$payroll_person = $this->input->post("payroll_person");
		$hidd_payroll_person = $this->input->post("hidd_payroll_person");
		$inform = $this->input->post("inform");
		$session_uid = $this->input->post("session_uid");
		if($payroll_person==''){
			$payroll_person='';
		}else{
			$$payroll_person=$payroll_person;
		}
		if($hidd_payroll_person==''){
			$hidd_payroll_person='';
		}else{
			$$hidd_payroll_person=$hidd_payroll_person;
		}
		if($complain_type=='Customer'){
			$skll=array();
			$customer=$this->input->post('customer');
			$customer_chk=implode('|',$customer);
			$multi=$this->input->post('multi');
			for($m=0; $m<count($multi); $m++){
				$cust_candi=$this->input->post('cust_candi_'.$m);
				if($cust_candi!=''){
					$skll[]=implode("+",$this->input->post('cust_candi_'.$m));
				}else{
					$skll[]=implode("|",$this->input->post('cust_candi_'.$m));
				}
			}
			$finalskill=implode("|",$skll); 
			$onlytxt=$this->input->post('onlytxt');
			for($j=0; $j<count($onlytxt); $j++){
				$customer_txt=$this->input->post('customer_txt');
				$detail=implode('|',$customer_txt);
			}
			$customer_detail=$finalskill.'|'.$detail;
			$employee_chk='';
			$employee_detail='';
			$ct_id=$customer;			
		}else if($complain_type=='Employee'){
			$payll=array();
			$customer_chk='';
			$customer_detail='';
			$employee=$this->input->post('employee');
			$employee_chk=implode('|',$employee);			 
			 //--onlytxt_emp				 
			$onlytxt_emp=$this->input->post('onlytxt_emp');
			for($j=0; $j<count($onlytxt_emp); $j++){
				 $employee_txt=$this->input->post('employee_txt');
				$employeetxt=implode('|',$employee_txt);
			}
			$multi_emp=$this->input->post('multi_emp');
			for($m=0; $m<count($multi_emp); $m++){
				$emp_candi=$this->input->post('emp_candi_'.$m);
				if($emp_candi!=''){
					$payll[]=implode("+",$this->input->post('emp_candi_'.$m));
				}else{
					$payll[]=implode("|",$this->input->post('emp_candi_'.$m));
				}
			}	
			$pay_team=implode("|",$payll);				 
			$ct_id=$employee;				 
			$employee_detail=$pay_team.'|'.$employeetxt;
		}		
		$insert_complain = array( 
			'cm_company'=>$company_name,
			'cm_contact_person'=>$cont_person, 
			'cm_complain'=>$complain_type, 
			'cm_recrutment'=>$recrutment_person, 
			'cm_team_recrute'=>$hidd_recrutment_person, 
			'cm_payroll'=>$payroll_person,
			'cm_team_payroll'=>$hidd_payroll_person,
			'cm_inform'=>$inform,
			'cm_customer_chk'=>($customer_chk == '') ? '' : $customer_chk,
			'cm_customer_detail'=>$customer_detail, 
			'cm_employee_chk'=>($employee_chk == '') ? '' : $employee_chk, 
			'cm_employee_detail'=>$employee_detail, 
			'cm_user_status'=>$complain_type, 
			'cm_create'=>$session_uid, 
			'cm_create_on'=>date("Y-m-d h:i:s"),
			'cm_mode'=>'APP'
		);		
		//echo "<pre>";print_r($insert_complain);echo "</pre>";
		$this->alldata_model->insertData('tbl_complain',$insert_complain);
		$inserted = $this->db->affected_rows();
		if($inserted==1){
			echo "inserted";
		}else{
			echo "not";
		}
	}
	public function add_person(){
		$uid = $this->input->post("uid");
		$session_ulevel = $this->input->post("session_ulevel");	
		$session_department = $this->input->post("session_department");		
		//$data['cmpny'] = $this->model->getAssignedComp($uid,$session_ulevel);
		$where = array('cs_process_status'=>'customer');
		$data['cmpny'] = $this->model->getComp($where,$session_department,$uid,$session_ulevel);
		$data['designation'] = $this->alldata_model->getDatamodel('tbl_lead_designation');
		echo json_encode($data);
	}
	public function addPerson(){
		$uid = $this->input->post("session_uid");
		$session_ulevel = $this->input->post("session_ulevel");	
		//echo "<pre>";print_r($_POST);echo "</pre>";
		$company_name = $this->input->post("company_name");
		$contact_person = $this->input->post("contact_person");
		$contact_phone = $this->input->post("contact_phone");
		$contact_designation = $this->input->post("contact_designation");
		$otheropt = $this->input->post("otheropt");
		$remarks = $this->input->post("remarks");
		$l_id = $this->db->get_where('tbl_customer', array('cs_id' => $company_name))->row("l_id");
		$where = array('l_id' => $l_id);
		$company=$this->alldata_model->sortingWheredata('company_name,contact_person,contact_status,contact_in_active_date,contact_no,contact_designation,contact_remarks', 'tbl_leads', $where, "NULL");
		$per = $company[0]['contact_person'];
		$sts = $company[0]['contact_status'];
		$act = $company[0]['contact_in_active_date'];
		$phn = $company[0]['contact_no'];
		$des = $company[0]['contact_designation'];
		$rmk = $company[0]['contact_remarks'];	
		if($contact_designation=='other_opt'){
			$insertArray = array(
				'd_name' => $otheropt,
				'created_by' => $uid
			);
			$cnt = $this->db->get_where('tbl_lead_designation', array('d_name' => $otheropt))->num_rows();
			if ($cnt == '0') {
				$this->alldata_model->insertData('tbl_lead_designation', $insertArray);
				$desig_id = $this->db->insert_id();
				$contact_designation = $desig_id;
			} else {
				$des = $this->db->get_where('tbl_lead_designation', array('d_name' => $otheropt))->row_array();
				$contact_designation = $des['d_id'];
			}
		}else{
			$contact_designation = $contact_designation;
		}
		if($per==''){
			$con_person = $contact_person;
			$con_status = '1';
			$con_date = date('d-m-Y');
			$con_no = $contact_phone;
			$con_designation = $contact_designation;
			$con_remark = $remarks;
		}else{
			$con_person = $per."|".$contact_person;
			$con_status = $sts."|1";
			$con_date = $act."|".date('d-m-Y');
			$con_no = $phn."|".$contact_phone;
			$con_designation = $des."|".$contact_designation;
			$con_remark = $rmk."|".$remarks;
		}
		$updateArray = array(
			'contact_person' => $con_person,
			'contact_status' => $con_status,
			'contact_in_active_date' => $con_date,
			'contact_no' => $con_no,
			'contact_designation' => $con_designation,
			'contact_remarks' => $con_remark,
		);			
		$this->alldata_model->UpdateData('tbl_leads', $updateArray, $where);
		$inserdata = array(
			'l_id' =>  $l_id,
			'pl_name' => $contact_person,
			'pl_from' => 'Complain APP',
			'pl_add_by' => $uid,
			'pl_add_date' => date('Y-m-d')
		);			
		$this->alldata_model->insertData('tbl_contact_person_log', $inserdata);	
	}
	public function compdettbl(){
		$type = $this->input->post("type");
		$ct_mail = $this->input->post("ct_mail");
		$data['comp_tbl'] = $this->model->getCompCnt($type,$ct_mail);
		echo json_encode($data);
	}
	public function getCompEmpNames(){
		$cid = $this->input->post("cid");
		/*$data['empnames'] = $this->alldata_model->sortingWheredata("cand_fname", 'tbl_candidate', array('cand_id' => $cid), 'cand_id', 'ASC');	
		echo json_encode($data);*/		
		
		$datadist = $this->alldata_model->sortingWheredata("cand_fname", 'tbl_candidate', array('cand_id' => $cid), 'cand_id', 'ASC');
		echo $datadist[0]['cand_fname'];
	}
	
	public function getEmpNamesComp(){
		$pos = $this->input->post("pos");
		$ids = $this->input->post("ids");
		//echo $pos."->".$ids;
		if (strpos($ids,'+') !== false) {
			$cand_id=explode("+",$ids);
			$arr=array();
			for($p=0; $p<count($cand_id); $p++){ 
				$whereks=array('cand_id' => $cand_id[$p]);			
				$datadist = $this->alldata_model->sortingWheredata("cand_fname", 'tbl_candidate', $whereks, 'cand_id', 'ASC');		
				echo $datadist[0]['cand_fname'].", ";
				//array_push($arr,$datadist[0]['cand_fname']);
			}
		}
	}
	public function getEmpCompnames(){
		$pos = $this->input->post("pos");
		$ids = $this->input->post("ids");
		if (preg_match("/^\d+$/", $ids)) {
			$datadist = $this->alldata_model->sortingWheredata("cand_fname", 'tbl_candidate', array('cand_id' => $ids), 'cand_id', 'ASC');
			echo $datadist[0]['cand_fname'];
		}
	}
	public function getEmpNamesComp_cust(){
		$ids = $this->input->post("ids");
		$pos = $this->input->post("pos");
		
		if (strpos($ids,'+') !== false) {
			$cand_id=explode("+",$ids);
			for($p=0; $p<count($cand_id); $p++){ 
			$whereks=array('cand_id' => $cand_id[$p]);
			//print_r($whereks);
			$datadist = $this->alldata_model->sortingWheredata("cand_fname", 'tbl_candidate', $whereks, 'cand_id', 'ASC');
			//print_r($datadist);
			echo $datadist[0]['cand_fname'].",  ";
		} 
		}else if (preg_match("/^\d+$/", $ids)) {
			$datadist = $this->alldata_model->sortingWheredata("cand_fname", 'tbl_candidate', array('cand_id' => $ids), 'cand_id', 'ASC');
			//print_r($datadist);
			echo $datadist[0]['cand_fname'];
		}else{
			echo $ids; 
		}
	}
	public function addVisit(){
		$csd_id = $this->input->post("csd_id");
		$data['company'] = $this->alldata_model->DetailData('tbl_customer_detailorder', array('csd_id' => $csd_id));
		$l_id = $data['company'][0]['l_id'];
		$verti_lid = $this->alldata_model->sortingWheredata('l_id,verticle', 'tbl_leads', array('l_id' => $l_id), "NULL");
		$verticle = $verti_lid[0]['verticle'];
		$exp_ver = explode("|", $verticle);
		for ($k = 0; $k < count($exp_ver); $k++) {
			$vdid = $exp_ver[$k];
			$this->db->where('vd_id', $vdid);
		}
		$data['verticle'] = $this->alldata_model->getDatamodel('tbl_quot_verticle_design');
		$data['present'] = $this->alldata_model->getDatamodel('tbl_activity_presentation');
		$data['doc_user'] = $this->alldata_model->getDatamodel('tbl_candidate_document');
		$data['problem'] = $this->alldata_model->getDatamodel('tbl_activity_problems');
		$data['visit'] = $this->alldata_model->getDatamodel('tbl_visit_purpose');
		echo json_encode($data);
	}
	public function getDocdata(){
		$cs_id = $this->input->post("cs_id");
		$data['docs'] = $this->model->collectedDocs($cs_id);
		echo json_encode($data);
	}
	public function candDocs(){
		$cand_id = $this->input->post("cand_id");
		//$data['canddocs'] = $this->db->get_where('tbl_candidate_document', array('cand_id' => $cand_id))->result_array();
		$data['docscandi'] = $this->alldata_model->DetailData("tbl_candidate_document",array('cand_id' => $cand_id));
		//echo "<pre>";print_r($data['docscandi']);echo "</pre>";
		echo json_encode($data);
	}
	public function addDailyActivity(){
		//echo "<pre>";print_r($_POST);echo "</pre>";
		//echo "------------------<br/>";
		$required = implode("|", $this->input->post('required'));
		$present = implode("|", $this->input->post('present'));
		$absent = implode("|", $this->input->post('absent'));
		$position = implode("|", $this->input->post('position'));
		$new = implode("|", $this->input->post('new'));
		$vacant = implode("|", $this->input->post('vacant'));
		$OT = implode("|", $this->input->post('OT'));
		$session_uid = $this->input->post("session_uid");
		$remark_head = implode("|", $this->input->post('remark_head'));		
		if ($this->input->post('presantation') != '') {
			$presantation = implode("|", $this->input->post('presantation'));
		} else {
			$presantation = '';
		}
		$present_txt = implode("|", $this->input->post('present_txt'));
		
		if ($this->input->post('problems') != '') {
			$problems = implode("|", $this->input->post('problems'));
		} else {
			$problems = '';
		}
		$problem_txt = implode("|", $this->input->post('problem_txt'));
		$visitpurpos = implode("|", $this->input->post('visit_purpos'));
		$head = count($this->input->post('qty'));
		$qty = $this->input->post('qty');
		$posin = $this->input->post('posin');
		$period = $this->input->post('period');	
		for ($h = 0; $h < $head; $h++) {
			$two = $qty[$h];
			$thrd = $posin[$h];
			$four = $period[$h];
			$f_year = $this->input->post("from_yr");
			$f_month = $this->input->post("from_mnth");
			$f_day = $this->input->post("from_dt");
			
			$t_year = $this->input->post("to_yr");
			$t_month = $this->input->post("to_mnth");
			$t_day = $this->input->post("to_dt");
			if($f_month[$h] < 9){
				$mnth="0".$f_month[$h];
			}else{
				$mnth=$f_month[$h];
			}
			if($t_month[$h] < 9){
				$t_mnth="0".$t_month[$h];
			}else{
				$t_mnth=$t_month[$h];
			}
			$from_dt_whole = $f_year[$h]."-".$mnth."-".$f_day[$h];
			$to_dt_whole = $t_year[$h]."-".$t_mnth."-".$t_day[$h];
			
			if ($two != '' && $thrd != '' && $four != '') {
				//echo "-=-= INSERT -=-=";
				$insert_new = array(
					"l_id" => $this->input->post('l_id'),
					"csd_id" => $this->input->post('csd_id'),
					"fd_qty" => $two,
					"fd_position" => $thrd,
					"fd_period" => $four, //D `` DATE NOT NULL AFTER ``;
					"fd_from" => ($from_dt_whole == '') ? '0000-00-00' : $from_dt_whole,
					"fd_to" => ($to_dt_whole == '') ? '0000-00-00' : $to_dt_whole,
					"fd_mode" => 'Active',
					"fd_status" => 'pending',
					//"fd_attach" => $attach,
					"fd_create" => $session_uid,
					"fd_create_on" => date('Y-m-d H:i:s'),
				);
				//echo "<pre>";print_r($insert_new);echo "</pre>";
				$this->alldata_model->insertData("tbl_fieldvisit_headcount", $insert_new);
				echo $last_id = $this->db->insert_id();
			}				
		} // for ends //
		
		$cand_id = count($this->input->post('cand_id'));
		for ($c = 0; $c < $cand_id; $c++){
			$cand_id1 = $this->input->post('cand_id')[$c];
			$adhar = $this->input->post('aadhar_' . $cand_id1)[0];
			$cheqe = $this->input->post('cheqe_' . $cand_id1)[0]; // echo "<br/>";
			$bank = $this->input->post('bank_' . $cand_id1)[0]; //echo "<br/>";
			$mark = $this->input->post('mark_' . $cand_id1)[0]; //echo "<br/>";
			$leaving = $this->input->post('leaving_' . $cand_id1)[0]; //echo "<br/>";
			$election = $this->input->post('election_' . $cand_id1)[0]; //echo "<br/>";
			$photo = $this->input->post('photo_' . $cand_id1)[0]; //echo "<br/>";
			$resume = $this->input->post('resume_' . $cand_id1)[0]; //echo "<br/>";

			if ($adhar != '' || $cheqe != '' || $bank != '' || $mark != '' || $leaving != '' || $photo != '' || $resume != '' || $election != '') {

				$where = array('cand_id' => $cand_id1);
				$docData = $this->alldata_model->DetailData('tbl_candidate_document', $where);

				//echo "-=-=-".count($docData); echo "<br/>";

				if (count($docData) == 0) {
					//echo "---------insert--------";
					$collect_doc = array(
						"cand_id" => $cand_id1,
						"cd_doc_aadharcard" => ($adhar == '') ? '0' : $adhar,
						"cd_doc_cheqe" => ($cheqe == '') ? '0' : $cheqe,
						"cd_doc_passbook" => ($bank == '') ? '0' : $bank,
						"cd_doc_election" => ($election == '') ? '0' : $election,
						"cd_doc_marksheet" => ($mark == '') ? '0' : $mark,
						"cd_doc_leavingcerti" => ($leaving == '') ? '0' : $leaving,
						"cd_doc_photo" => ($photo == '') ? '0' : $photo,
						"cd_doc_resume" => ($resume == '') ? '0' : $resume,
						"cd_doc_status" => "Pending",
						"cd_doc_createby" => $session_uid,
						"cd_doc_datetime" => date('Y-m-d H:i:s'),
					);
					//echo "<pre>";print_r($collect_doc);echo "</pre>";							
					$this->alldata_model->insertData("tbl_candidate_document", $collect_doc);
				} else {
					//echo '----------update-----------<br/>'.$cand_id1."<br/>";
					$update_doc = array(
						"cd_doc_aadharcard" => ($adhar == '') ? '0' : $adhar,
						"cd_doc_cheqe" => ($cheqe == '') ? '0' : $cheqe,
						"cd_doc_passbook" => ($bank == '') ? '0' : $bank,
						"cd_doc_election" => ($election == '') ? '0' : $election,
						"cd_doc_marksheet" => ($mark == '') ? '0' : $mark,
						"cd_doc_leavingcerti" => ($leaving == '') ? '0' : $leaving,
						"cd_doc_photo" => ($photo == '') ? '0' : $photo,
						"cd_doc_resume" => ($resume == '') ? '0' : $resume,
					);
					//echo "<pre>";print_r($update_doc);echo "</pre>";				
					$this->alldata_model->UpdateData('tbl_candidate_document', $update_doc, $where);
				}
			}
		} // for ends //
		
		$insert_data = array(
			"l_id" => $this->input->post('l_id'),
			"csd_id" => $this->input->post('csd_id'),
			"fv_person" => $this->input->post('name'),
			"fv_purpose" => $visitpurpos, //this->input->post('visit_purpos'),
			"fv_purreason" => $this->input->post('visitereason'),
			"fv_remark" => $this->input->post('remark'),
			"fv_training" => $this->input->post('training'),
			"fv_headcount" => $this->input->post('csd_head_cnt'),
			"fv_required" => ($required == '') ? '' : $required,
			"fv_present" => ($present == '') ? '' : $present,
			"fv_absent" => ($absent == '') ? '' : $absent,
			"fv_position" => ($position == '') ? '' : $position, //------
			"fv_new" => ($new == '') ? '' : $new,
			"fv_vacant" => ($vacant == '') ? '' : $vacant,
			"fv_ot" => ($OT == '') ? '' : $OT,
			"fv_remarkhead" => ($remark_head == '') ? '' : $remark_head,
			"fv_presentation" => ($presantation == '') ? '' : $presantation,
			"fv_present_txt" => ($present_txt == '') ? '' : $present_txt,
			"fv_problem" => ($problems == '') ? '' : $problems,
			"fv_problm_txt" => ($problem_txt == '') ? '' : $problem_txt,
			"fv_patrollling" => $this->input->post('patrolling'),
			"fv_from" => "ERP",
			// "fv_complain" => $this->input->post('customer_complain'),
			// "fv_improvement" => $this->input->post('improvment'),
			// "fv_development" => $this->input->post('new_development'),
			"fv_newjoinee" => $this->input->post('new_joinee'),
			"fv_create_by" => $session_uid,
		);       
		//echo "<pre>";print_r($insert_data);echo "</pre>";	
		$this->alldata_model->insertData("tbl_field_visit", $insert_data);
	}
	public function photoupload_activity($sess_u_id,$insert_id,$old_userPic,$imgfilename){
		$filenm = $_FILES["file"]['name'];
		$getfilenm = explode("?",$filenm);
		$name = $getfilenm[0];
		//$name = $imgfilename;
        move_uploaded_file($_FILES["file"]["tmp_name"], './feedback/'. $name);
		$userfile_path = "feedback/".$name; 
		$userfile_path=$userfile_path;
		$update_attach =array(
			'fd_attach'=>$userfile_path,
		);		 
		$where=array("fd_id"=>$insert_id);
		//			
		$this->alldata_model->updateData("tbl_fieldvisit_headcount",$update_attach,$where);
		//echo "<pre>";print_r($update_attach);echo "</pre>";	
	}
	public function viewVisit(){
		$csd_id = $this->input->post("csd_id");
		$where = array('csd_id' => $csd_id);
		//$data['result'] = $this->alldata_model->DetailData("tbl_field_visit", $where);
		$data['result'] = $this->model->getDailyActData($where);
        $data['present'] = $this->alldata_model->getDatamodel('tbl_activity_presentation');
        $data['problem'] = $this->alldata_model->getDatamodel('tbl_activity_problems');
        $data['visit'] = $this->alldata_model->getDatamodel('tbl_visit_purpose');
		/*foreach($data['result'] as $val){
			$fv_purpose = $val['fv_purpose'];
			if (strpos($fv_purpose, '|') !== false) {
				$explode_purpose = explode("|",$fv_purpose);
			}else{
				$explode_purpose = $fv_purpose;
			}			
			$arr = array();
			for($i=0;$i<count($explode_purpose);$i++){
				$visit = $this->alldata_model->DetailData('tbl_visit_purpose',array('vp_id'=>$explode_purpose[$i]));
				$vp_nm = $visit[0]['vp_name']; 
				array_push($arr,$vp_nm);
			}
		}*/
		
		
		//$data['vpnm'] = $arr;
		echo json_encode($data);
	}
	public function searchCandbyMob(){
		$search_mob = $this->input->post("search_mob");
		$data['search_res_mob'] = $this->model->searchCandMob($search_mob);
		echo json_encode($data); 
	}
	public function searchregPRO(){
		$search_pro = $this->input->post("search_pro");
		$uid = $this->input->post("uid");
		$session_ulevel = $this->input->post("session_ulevel");
		$searchwhere='(c.cand_fname LIKE "%'.$search_pro.'%" OR c.cand_mobile LIKE "%'.$search_pro.'%" OR c.secondry_mobile LIKE "%'.$search_pro.'%" OR c.cand_email LIKE "%'.$search_pro.'%")';
		//$searchwhere='c.cand_fname LIKE "%'.$search_pro.'%"';
		$data['proList'] = $this->model->provisionalList($uid,$session_ulevel,$searchwhere); 
		echo json_encode($data);
	}
	public function searchdpo(){
		$uid=$this->input->post("uid");
		$search_dpo=$this->input->post("search_dpo");
		$session_ulevel=$this->input->post("session_ulevel");
		$session_department = $this->input->post("session_department");
		$where=array('cs_delete' => 1,'cs_process_status' =>'customer');
		$searchwhere='(cs.cs_invoice_name LIKE "%'.$search_dpo.'%")';
		$data['dpoList']=$this->model->getDPOList($uid,$session_ulevel,$where,$session_department,$searchwhere);		
		$verti=array();$cnt=array();$cno=array();
		
		foreach($data['dpoList'] as $i=>$val){ 
			$cs_id=$this->alldata_model->encryptdata($val['cs_id']);
			$where=array('csd.cs_id'=>$val['cs_id'],'csd.qutn_type'=>'custom');
			//$datacustom= $this->alldata_model->DetailData('tbl_customer_detailorder',$where); 
			$datacustom=$this->model->dpo_list_verticle($where,$session_ulevel,$session_department,$uid);
			$where=array('csd.cs_id'=>$val['cs_id'],'csd.qutn_type'=>'lumsum');
			//$datalumsum = $this->alldata_model->DetailData('tbl_customer_detailorder',$where);
			$datalumsum=$this->model->dpo_list_verticle($where,$session_ulevel,$session_department,$uid);
			$where=array('csd.cs_id'=>$val['cs_id'],'csd.qutn_type'=>'placement');
			//$dataplace = $this->alldata_model->DetailData('tbl_customer_detailorder',$where);
			$dataplace=$this->model->dpo_list_verticle($where,$session_ulevel,$session_department,$uid); 
			$cusarry=array();
			$contary=array();
			if(count($datalumsum)>0){
				foreach ($datalumsum as $valx){
					$cusarry[]=$valx['csd_verticle'];
					$contary[]=$valx['csd_contact_mobile']; 
			 	} //foreach custom
			} 
			if(count($datacustom)>0){
				foreach ($datacustom as $vdalx){
					 $cusarry[]=$vdalx['csd_verticle']; 
					 $contary[]=$vdalx['csd_contact_mobile'];
			 	} //foreach custom
			} 
			if(count($dataplace)>0){
				foreach ($dataplace as $vdalxp){
					$cusarry[]=$vdalxp['csd_verticle']; 
					$contary[]=$vdalxp['csd_contact_mobile']; 
			 	} //foreach custom
			}
			$counts=array_count_values($cusarry);
			$cont=array_count_values($contary);
			$verti[$i]=$counts;
			$cno[$i]=$contary;
			$tot[$i]=count($cusarry);
		}
		//echo "<prE>";print_r($tot);echo "</prE>";
		$data['verti']=$verti;
		$data['cont_arr']=$cno;
		if(count($data['dpoList'])==0){
			$data['tot_vert']=0;
		}else{
			$data['tot_vert']=$tot;
		}		
		echo json_encode($data);
	}
	
	public function searchInterPlace(){
		$search_intp = $this->input->post('search_intp');
		$uid = $this->input->post("uid");
		$session_ulevel = $this->input->post("session_ulevel");
		$session_department = $this->input->post("session_department");
		$where = array('cs.cs_delete' => 1, 'cs.cs_process_status' => 'customer');
		$order = 'cs.cs_id DESC';
		$searchwhere='(cs.cs_invoice_name LIKE "%'.$search_intp.'%")';
		$data['int_list'] = $this->model->listInterView($where,$uid,$session_ulevel,$order,$searchwhere,$session_department);
		echo json_encode($data);
	}
	public function searchselCandidateList(){
		$search_candi=$this->input->post("search_candi");
		$uid = $this->input->post("uid");
		$session_ulevel = $this->input->post("session_ulevel");	
		$session_department = $this->input->post("session_department");		
		$where = array('cs.cs_delete' => 1, 'cs.cs_process_status' => 'customer');
		$searchwhere='(cs.cs_invoice_name LIKE "%'.$search_candi.'%")';		
		$data['candidates_sel'] = $this->model->selectedCandis($uid,$session_ulevel,$where,$searchwhere,$session_department);
		echo json_encode($data);
	}
	public function searchemployeeList(){
		$uid = $this->input->post("uid");
		$session_ulevel = $this->input->post("session_ulevel");	
		$session_department = $this->input->post("session_department");
		$where = array('cs.cs_delete' => 1, 'cs.cs_process_status' => 'customer');
		$search_emp = $this->input->post("search_emp");
		$searchwhere='(cs.cs_invoice_name LIKE "%'.$search_emp.'%")';
		$order = 'cs.cs_id DESC';
		$data['emp_list'] = $this->model->Empl_list($where,$order,$session_ulevel,$uid,$session_department,$searchwhere);
		echo json_encode($data); 
	}
	public function searchfeedbacks(){
		$session_ulevel=$this->input->post("session_ulevel");
		$uid=$this->input->post("uid");
		$search_feedback = $this->input->post('search_feedback');
		$searchwhere='(cs.cs_invoice_name LIKE "%'.$search_feedback.'%" OR fb.fb_contact_person LIKE "%'.$search_feedback.'%" OR DATE_FORMAT(fb.fb_date,"%d-%m-%Y") = "'.$search_feedback.'")';
		$data['feedback']=$this->model->getFeedbacks($session_ulevel,$uid,$searchwhere);
		echo json_encode($data); 
	}
	public function searchcomplainList(){
		$where = array('cm.cm_delete' => 1);
		$uid = $this->input->post("uid");
		$session_ulevel = $this->input->post("session_ulevel");
		$search_comp = $this->input->post("search_comp");
		$searchwhere='(cs.cs_invoice_name LIKE "%'.$search_comp.'%")';
		$data['comp_list'] = $this->model->getCompList($where,$uid,$session_ulevel,$searchwhere);
		echo json_encode($data);
	}
	public function searchnewBusinessList(){
		$search_newb = $this->input->post("search_newb");
		$data['bus_dev'] = $this->model->buss_devSearch($search_newb);
		echo json_encode($data);
	}
	public function SearchcandselStatus(){
		$search_selemp = $this->input->post("search_selemp");
		$cs_id = $this->input->post("cs_id");
		$searchwhere="((CONCAT(cn.cand_fname,' ',cn.cand_lname,' ') LIKE '%$search_selemp%') OR cn.reg_num LIKE '%".$search_selemp."%' OR vd.designation LIKE '%".$search_selemp."%')";
		$data['selc_status'] = $this->model->list_selected_status($cs_id,$searchwhere);
		echo json_encode($data);
	}
	public function searchtotEmps(){
		$search_empl = $this->input->post("search_empl");
		$cs_id = $this->input->post("cs_id");
		$searchwhere="((CONCAT(cn.cand_fname,' ',cn.cand_lname,' ') LIKE '%$search_empl%') OR cn.reg_num LIKE '%".$search_empl."%' OR vd.designation LIKE '%".$search_empl."%')";
		$data['totemps'] = $this->model->list_selected_employee($cs_id,$searchwhere);
		echo json_encode($data); 
	}
	public function customerDesignations(){
		$sel_cmp = $this->input->post("sel_cmp");
		$where11 = array('cs_id' => $sel_cmp, 'csd_delete' => '1', 'csd_process_status' => 'customer');
        $datacsd = $this->alldata_model->sortingWheredata("l_id,qutn_id,qutn_type", 'tbl_customer_detailorder', $where11, 'csd_id', 'ASC');
        $des_int = array();
        $des_lum = array();
        $des_pla = array();
        $final_des = array();
        for ($d = 0; $d < count($datacsd); $d++) {
            $l_id = $datacsd[$d]['l_id'];
            $qutn_id = $datacsd[$d]['qutn_id'];
            $qutn_type = $datacsd[$d]['qutn_type'];
            if ($qutn_type == 'custom') {
                $sel = $this->db->select('GROUP_CONCAT(cus.des_id) as new_des');
                $this->db->where('l_id', $l_id);
                $this->db->where('cus_id', $qutn_id);
                $data_quotation = $this->db->get('tbl_quot_custom_new AS cus')->result_array();

                if (count($data_quotation) != 0) {
                    $des_int[] = $data_quotation[0]['new_des'];
                }
            } else if ($qutn_type == 'lumsum') {
                $sel = $this->db->select('GROUP_CONCAT(lm.des_id) as new_des');
                $this->db->where('l_id', $l_id);
                $this->db->where('lqe_id', $qutn_id);
                $lum_quotation = $this->db->get('tbl_quot_lumsum AS lm')->result_array();

                if (count($lum_quotation) != 0) {
                    $des_lum[] = $lum_quotation[0]['new_des'];
                }
            } else {

                $sel = $this->db->select("SUBSTRING_INDEX(mr_position, '|',char_length(mr_position)) AS mrpos");
                $this->db->where('l_id', $l_id);
                $this->db->where('pla_id', $qutn_id);
                $pla_quotation = $this->db->get('tbl_MRF_placement AS mr')->result_array();

                if (count($pla_quotation) != 0) {
                    $str_pla = str_replace("|", ",", $pla_quotation[0]['mrpos']);
                    $des_pla[] = $str_pla;
                }
            }
        }
        $result_one = array_merge_recursive($des_int, $des_lum, $des_pla);
        $new_abc = implode(",", $result_one);
        $exp_one = explode(",", $new_abc);
        for ($r = 0; $r < count($exp_one); $r++) {
            $final_des[] = $exp_one[$r];
        }
        $vd_design = array_unique($final_des);
        $sel = $this->db->select("vd_id,designation");
        $this->db->where_in('vd_id', $vd_design);
        $this->db->where('is_delete', 1);
        $data['posti']= $this->db->get('tbl_quot_verticle_design')->result_array();
        /*$rows = '';
        if (!empty($plaquotation)) {
            //$rows .= '<option> --- Select Positions --- </option>';
			//$rows.='<option>----SELECT POSITIONS----</option>';
			$rows = '<option value="" >SELECT POSITIONS</option>';
            foreach ($plaquotation as $k => $v) {
                $vd_id = $v['vd_id'];
                $designation = $v['designation'];
                $rows .= '<option value="' . $vd_id . '"> ' . $designation . ' </option>';
            }
            $resultArrauy['status'] = 'Success';
            $resultArrauy['rows'] = $rows;
        } else {
            $rows .= '<option> --- Select Positions avilable --- </option>';
            $resultArrauy['status'] = 'Fail';
            $resultArrauy['rows'] = $rows;
        }*/
        echo json_encode($data);
	}
	public function searchcanddets(){
		//echo "<pre>";print_r($_POST);echo "</pre>";
		$cand_id = $this->input->post("cand_id");
		$session_uid = $this->input->post("session_uid");
		$session_ulevel = $this->input->post("session_ulevel");
		$session_department = $this->input->post("session_department");	
		$where1 = array('c.cand_id'=>$cand_id);		
		$data['searchintList'] = $this->model->searchIntList($session_uid,$session_ulevel,$where1);		 
		echo json_encode($data);		
	}
	/*public function selected_list(){
		$where = array('cs.cs_delete' => 1, 'cs.cs_process_status' => 'customer');
		$order = "cs.cs_id DESC";
		data['candi_list'] = $this->model->getselectedCandilist($where,$order);		
	}*/
		/*public function intStatusMaster(){
		$interview = $this->alldata_model->getDatamodel('tbl_interview_status');
		$array=array();
		$iid=array();		
		foreach($interview as $inter){
			$i_id = $inter["i_id"];
			$stus = $inter["i_status"]." - ".$inter["status_hindi"];
			//$arr=array(=>$stus);
			array_push($array,$stus);	
			array_push($iid,$i_id);			
		}
//		$data['stat'] = array_combine($iid, $array);
		$stat = array_combine($iid, $array);		
		$mrg = array("YES"=>"YES - हाॅं ","NO"=>"NO - नही ");
		$data['stat'] = array_merge($mrg,$stat);				
		echo json_encode($data);			
	}*/
	/*public function fieldVisit(){
		$session_ulevel = $this->input->post("session_ulevel");
		$where = array('cs.cs_delete' => 1, 'cs.cs_process_status' => 'customer');
		$order = 'cs.cs_id DESC';
		$data['fieldvisit'] = $this->model->getFieldVisits($where,$order,$session_ulevel);
		echo json_encode($data);
	}*/
}
?>