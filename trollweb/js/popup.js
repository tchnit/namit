status="Doto"
var a=new Array(),n=""
a[1]='T';
a[2]='a';
a[3]='o';
a[4]=' ';
a[5]='L';
a[6]='à';
a[7]=' ';
a[8]='T';
a[9]='h';
a[10]='ằ';
a[11]='n';
a[12]='g';
a[13]=' ';
a[14]='Đ';
a[15]='i';
a[16]='ê';
a[17]='n';
a[18]=' ';
a[19]='N';
a[20]='h';
a[21]='ấ';
a[22]='t';
a[23]=' ';
a[24]='H';
a[25]='ệ';
a[26]=' ';
a[27]='M';
a[28]='ặ';
a[29]='t';
a[30]=' ';
a[31]='T';
a[32]='r';
a[33]='ờ';
a[34]='i';
a[35]=' ';
a[36]='N';
a[37]='à';
a[38]='y';
a[39]=' ';
a[40]='Đ';
a[41]='ấ';
a[42]='y';
a[42]=' ';

function one()
{
t=document.f.txt.value
j=t.length
if(j>0)
{
for(var i=1;i<=j;i++)
{
n=n+a[i]
if(i==48)
{
document.f.txt.value=""
n=""
}
}
}
document.f.txt.value=n
n=""
setTimeout("one()",1)
}
function s()
{
}
function on()
{
one()
}

        $(document).ready(function() {
            $('#k').hide();
            $('h1').click(function() {
                $('.active').removeClass('active');
                $('#k').slideUp('fast');
                if($(this).next('#k').is(':hidden') == true) {
                $(this).addClass('active');
                $(this).next('#k').slideDown('fast');
                }
            });
        });
					function Yeu()
					{
					$("#divResult").fadeOut(0);
					$("#divResult").html("</br><h2>THẬT VẬY SAO!! </h2>");
					$("#divResult").fadeIn(2000,function()
							{
							$("#divResult2").fadeOut(0);
							$("#divResult2").html("<p>Tao Biết Mày Điên Mà</p></br>");
							$("#divResult2").fadeIn(2000,function()
									{
									$("#divResult3").fadeOut(0);
									$("#divResult3").html("<p>Thôi Tạm Biệt Thằng Điên Nhất Hệ Mặt Trời</p></br>");
									$("#divResult3").fadeIn(2000);
									}
								);
							}
						);
					}
				