//using Microsoft.AspNetCore.Authorization;
//using Microsoft.AspNetCore.Mvc;

//namespace AngularApp4.Server.Core
//{
//    [Route("api/Auth")]
//    [ResponseCache(CacheProfileName = "NoStore")]
//    public abstract class EnQualifyMobileAuthProxyControllerBase : BaseAPIProxyController
//    {

//        [AllowAnonymous]
//        [Route("Token")]
//        [HttpPost]
//        public ActionResult<TokenResponse> Authenticate([FromBody] TokenRequest request)
//        {
//            return Post(request, "auth/token");
//        }
//    }
//}
