//using Microsoft.AspNetCore.Http.HttpResults;
//using Microsoft.AspNetCore.Mvc;

//namespace AngularApp4.Server.Core
//{
//    public abstract class BaseAPIProxyController : ControllerBase
//    {

//        public BaseAPIProxyController()
//        {
//        }

//        protected virtual OmniProxyAppServiceClient GetClient()
//        {
//            var service = new OmniProxyAppServiceClient
//            {
//                Token = HttpContext?.AccessToken(),
//                IPAddress = HttpContext?.IPAddress()
//            };
//            return service;
//        }

//        //[DebuggerStepThrough]
//        protected ActionResult Post(BaseRequest request, string requestUri)
//        {
//            return GetClient().SendPost(requestUri, request).ToResult(HttpContext);
//        }

//        //[DebuggerStepThrough]
//        protected ActionResult Post(SignedMessage request, string requestUri)
//        {
//            if (!request.Resolve())
//                return BadRequest();
//            return GetClient().SendPost(requestUri, request).ToResult(HttpContext);
//        }

//        //[DebuggerStepThrough]
//        protected ActionResult Post(string requestUri)
//        {
//            return GetClient().SendPost(requestUri, string.Empty).ToResult(HttpContext);
//        }

//        //[DebuggerStepThrough]
//        protected ActionResult Get(string requestUri)
//        {
//            return GetClient().SendGet(requestUri).ToResult(HttpContext);
//        }

//        #region Not used!

//        //[DebuggerStepThrough]
//        protected ActionResult<T> Post<T>(BaseRequest request, string requestUri)
//            where T : BaseResponse, new()
//        {
//            return GetClient().SendPost(requestUri, request).ToResult<T>(HttpContext);
//        }

//        //[DebuggerStepThrough]
//        protected ActionResult<T> Post<T>(SignedMessage request, string requestUri)
//            where T : BaseResponse, new()
//        {
//            if (request == null || !request.Resolve())
//                return BadRequest();
//            return GetClient().SendPost(requestUri, request).ToResult<T>(HttpContext);
//        }

//        //[DebuggerStepThrough]
//        protected ActionResult<T> Post<T>(string requestUri)
//            where T : BaseResponse, new()
//        {
//            return GetClient().SendPost(requestUri, string.Empty).ToResult<T>(HttpContext);
//        }

//        //[DebuggerStepThrough]
//        protected ActionResult<T> Get<T>(string requestUri)
//            where T : BaseResponse, new()
//        {
//            return GetClient().SendGet(requestUri).ToResult<T>(HttpContext);
//        }


//        // TODO: Loglanabilir proxy metodu denemeleri.
//        //[DebuggerStepThrough]
//        protected ActionResult<T> Post<TR, T>(TR request, string requestUri)
//            where TR : BaseRequest, new()
//            where T : BaseResponse, new()
//        {
//            if (request == null)
//                request = new TR();

//            RequestLogger.Bind(HttpContext, request);

//            T response;
//            ActionResult<T> result;
//            try
//            {
//                result = GetClient().SendPost(requestUri, request).ToResult<T>(HttpContext);
//                response = result.Value<T>();
//            }
//            catch (Exception ex)
//            {
//                response = new T { Result = ex };
//                result = Ok(response);
//            }

//            return result;
//        }

//        #endregion
//    }
//}
