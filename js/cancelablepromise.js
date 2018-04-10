/**
 * Make a Promise cancelable.
 */
"use strict";

define
(
    [],
    /**
     * @summary Wrap a Promise and add a cancel method.
     * @description Provides a way to cancel an asynchronous Promise.
     * @name cancelablepromise
     * @exports cancelablepromise
     * @version 1.0
     */
    function ()
    {
        class CancelablePromise
        {
            // promise and cancel callback function (when cancel is called, this method is also called).
            constructor (promise, cancel)
            {
                this._iscanceled = false;
                this._cancelcallback = cancel;
                this._promise = new Promise (
                    (resolve, reject) =>
                    {
                        this._then = (value) => this._iscanceled ? reject ( {canceled: true} ) : resolve (value)
                        promise.then (this._then);
                        promise.catch ((error) => this._iscanceled ? reject ( {canceled: true} ) : reject (error));
                    }
                );
            }
            cancel ()
            {
                this._iscanceled = true;
                if (this._cancelcallback)
                    this._cancelcallback ();
                this._then ( {canceled: true} );
            }
            promise ()
            {
                return (this._promise);
            }
            setPromise (promise)
            {
                this._promise = promise;
            }
        }

        return (CancelablePromise);
    }
)

//function echo (msg) { console.log (msg); }
//function echofun (msg) { return (function () { console.log (msg); }) }
//function doit (resolve, reject) { setTimeout (function () { resolve ("ok"); }, 2500); }
//
//var s = new CancelablePromise (new Promise (doit), echofun ("cancelled"));
//s.promise ().then (echo, echofun ("bad"));
//
//var s = new CancelablePromise (new Promise (doit), echofun ("cancelled"));
//s.cancel ();
//s.promise ().then (echo, echofun ("bad"));
