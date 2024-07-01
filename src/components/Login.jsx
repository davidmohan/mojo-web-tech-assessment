import { LoginSocialFacebook } from 'reactjs-social-login'
import { FacebookLoginButton } from 'react-social-login-buttons'

export default function Login() {
  return (
    <>
      <div className='w-100 vh-100 d-flex justify-content-center align-items-center'>
        <div className="col-lg-3 col-sm-4">
        <LoginSocialFacebook
          appId="744348137664826"
          onResolve={(response)=> {
            console.log(response)
          }}
          onReject={(err)=> {
            console.log(err)
          }}
        >
          <FacebookLoginButton/>
        </LoginSocialFacebook>
        </div>
      </div>
      {/* <div className='w-100 vh-100 d-flex'>
        <div className='col-8 overflow-hidden'>
          <img src="https://static.tildacdn.com/tild6135-6637-4338-a438-316232663366/facebook_lysechko.png" alt="" width={800} height={800} />
        </div>
        <div className='col-4'>

        </div>
      </div> */}
    </>
  )
}
