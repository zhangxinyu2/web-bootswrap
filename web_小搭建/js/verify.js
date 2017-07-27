/**
 * Created by 860105 on 2016/12/22.
 */
$(function(){
	if(realName==null){
		document.getElementById("userDownload").innerHTML="未登录";
	}else{
		document.getElementById("userDownload").innerHTML= realName;
	}
    $('#stackedForm').formValidation({
        framework: 'semantic',
        icon: {
            valid: 'checkmark icon',
            invalid: 'remove icon',
            validating: 'refresh icon',
            feedback: 'fv-control-feedback'
        },
        fields: {
            username: {
                message: '用户名无效',
                validators: {
                    notEmpty: {
                        message: '用户名姓名是必需的，不能为空'
                    },
                    stringLength: {
                        min: 2,
                        max: 20,
                        message: '用户名姓名长度必须大于2个字符，且小于20个字符'
                    },
                }
            },
            password: {
                validators: {
                    notEmpty: {
                        message: '密码是必需的，不能为空'
                    },
                    different: {
                        field: 'username',
                        message: '密码不能与用户名相同'
                    }
                }
            }
        }
    });
});
