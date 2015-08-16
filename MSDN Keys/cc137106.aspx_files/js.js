Type.registerNamespace('Microsoft.Mtps.Subscriptions.Web.Services');
Microsoft.Mtps.Subscriptions.Web.Services.PAKeyRetrievalService=function() {
Microsoft.Mtps.Subscriptions.Web.Services.PAKeyRetrievalService.initializeBase(this);
this._timeout = 0;
this._userContext = null;
this._succeeded = null;
this._failed = null;
}
Microsoft.Mtps.Subscriptions.Web.Services.PAKeyRetrievalService.prototype={
_get_path:function() {
 var p = this.get_path();
 if (p) return p;
 else return Microsoft.Mtps.Subscriptions.Web.Services.PAKeyRetrievalService._staticInstance.get_path();},
ClaimUserKey:function(keyId,prodId,locale,brand,prodFamilyId,unqId,fileId,succeededCallback, failedCallback, userContext) {
return this._invoke(this._get_path(), 'ClaimUserKey',false,{keyId:keyId,prodId:prodId,locale:locale,brand:brand,prodFamilyId:prodFamilyId,unqId:unqId,fileId:fileId},succeededCallback,failedCallback,userContext); },
GetUserKey:function(prodId,locale,brand,prodFamilyId,unqId,fileId,succeededCallback, failedCallback, userContext) {
return this._invoke(this._get_path(), 'GetUserKey',false,{prodId:prodId,locale:locale,brand:brand,prodFamilyId:prodFamilyId,unqId:unqId,fileId:fileId},succeededCallback,failedCallback,userContext); }}
Microsoft.Mtps.Subscriptions.Web.Services.PAKeyRetrievalService.registerClass('Microsoft.Mtps.Subscriptions.Web.Services.PAKeyRetrievalService',Sys.Net.WebServiceProxy);
Microsoft.Mtps.Subscriptions.Web.Services.PAKeyRetrievalService._staticInstance = new Microsoft.Mtps.Subscriptions.Web.Services.PAKeyRetrievalService();
Microsoft.Mtps.Subscriptions.Web.Services.PAKeyRetrievalService.set_path = function(value) { Microsoft.Mtps.Subscriptions.Web.Services.PAKeyRetrievalService._staticInstance.set_path(value); }
Microsoft.Mtps.Subscriptions.Web.Services.PAKeyRetrievalService.get_path = function() { return Microsoft.Mtps.Subscriptions.Web.Services.PAKeyRetrievalService._staticInstance.get_path(); }
Microsoft.Mtps.Subscriptions.Web.Services.PAKeyRetrievalService.set_timeout = function(value) { Microsoft.Mtps.Subscriptions.Web.Services.PAKeyRetrievalService._staticInstance.set_timeout(value); }
Microsoft.Mtps.Subscriptions.Web.Services.PAKeyRetrievalService.get_timeout = function() { return Microsoft.Mtps.Subscriptions.Web.Services.PAKeyRetrievalService._staticInstance.get_timeout(); }
Microsoft.Mtps.Subscriptions.Web.Services.PAKeyRetrievalService.set_defaultUserContext = function(value) { Microsoft.Mtps.Subscriptions.Web.Services.PAKeyRetrievalService._staticInstance.set_defaultUserContext(value); }
Microsoft.Mtps.Subscriptions.Web.Services.PAKeyRetrievalService.get_defaultUserContext = function() { return Microsoft.Mtps.Subscriptions.Web.Services.PAKeyRetrievalService._staticInstance.get_defaultUserContext(); }
Microsoft.Mtps.Subscriptions.Web.Services.PAKeyRetrievalService.set_defaultSucceededCallback = function(value) { Microsoft.Mtps.Subscriptions.Web.Services.PAKeyRetrievalService._staticInstance.set_defaultSucceededCallback(value); }
Microsoft.Mtps.Subscriptions.Web.Services.PAKeyRetrievalService.get_defaultSucceededCallback = function() { return Microsoft.Mtps.Subscriptions.Web.Services.PAKeyRetrievalService._staticInstance.get_defaultSucceededCallback(); }
Microsoft.Mtps.Subscriptions.Web.Services.PAKeyRetrievalService.set_defaultFailedCallback = function(value) { Microsoft.Mtps.Subscriptions.Web.Services.PAKeyRetrievalService._staticInstance.set_defaultFailedCallback(value); }
Microsoft.Mtps.Subscriptions.Web.Services.PAKeyRetrievalService.get_defaultFailedCallback = function() { return Microsoft.Mtps.Subscriptions.Web.Services.PAKeyRetrievalService._staticInstance.get_defaultFailedCallback(); }
Microsoft.Mtps.Subscriptions.Web.Services.PAKeyRetrievalService.set_enableJsonp = function(value) { Microsoft.Mtps.Subscriptions.Web.Services.PAKeyRetrievalService._staticInstance.set_enableJsonp(value); }
Microsoft.Mtps.Subscriptions.Web.Services.PAKeyRetrievalService.get_enableJsonp = function() { return Microsoft.Mtps.Subscriptions.Web.Services.PAKeyRetrievalService._staticInstance.get_enableJsonp(); }
Microsoft.Mtps.Subscriptions.Web.Services.PAKeyRetrievalService.set_jsonpCallbackParameter = function(value) { Microsoft.Mtps.Subscriptions.Web.Services.PAKeyRetrievalService._staticInstance.set_jsonpCallbackParameter(value); }
Microsoft.Mtps.Subscriptions.Web.Services.PAKeyRetrievalService.get_jsonpCallbackParameter = function() { return Microsoft.Mtps.Subscriptions.Web.Services.PAKeyRetrievalService._staticInstance.get_jsonpCallbackParameter(); }
Microsoft.Mtps.Subscriptions.Web.Services.PAKeyRetrievalService.set_path("/Platform/Controls/BPDownloadsList/PAKeyRetrievalService.asmx");
Microsoft.Mtps.Subscriptions.Web.Services.PAKeyRetrievalService.ClaimUserKey= function(keyId,prodId,locale,brand,prodFamilyId,unqId,fileId,onSuccess,onFailed,userContext) {Microsoft.Mtps.Subscriptions.Web.Services.PAKeyRetrievalService._staticInstance.ClaimUserKey(keyId,prodId,locale,brand,prodFamilyId,unqId,fileId,onSuccess,onFailed,userContext); }
Microsoft.Mtps.Subscriptions.Web.Services.PAKeyRetrievalService.GetUserKey= function(prodId,locale,brand,prodFamilyId,unqId,fileId,onSuccess,onFailed,userContext) {Microsoft.Mtps.Subscriptions.Web.Services.PAKeyRetrievalService._staticInstance.GetUserKey(prodId,locale,brand,prodFamilyId,unqId,fileId,onSuccess,onFailed,userContext); }
