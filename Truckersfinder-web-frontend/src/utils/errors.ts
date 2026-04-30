import { RequestError } from './api'
import { isEmpty } from './helpers'

export const is404 = (err: RequestError) => {
    if (!err || !err.code) return false
    return err.code === 'OBJECT_NOT_FOUND'
}

export const makeErrMsg = (err: RequestError) => {
    if (!err) return null
    if (err.params && !isEmpty(err.params)) {
        return Object.values(err.params)[0] as string
    }
    return err.detail || null
}

export const makeErrMessages = (err: RequestError): string[] => {
    if (!err) return []
    if (err.params && !isEmpty(err.params)) {
        return Object.values(err.params) as string[]
    } else if (err.detail) {
        return [err.detail]
    }
    return []
}

export const makeFieldError = (apiErr: unknown, errMsg: string | undefined) => {
    if (!apiErr) return ''
    if (errMsg) return errMsg
    return typeof apiErr === 'string' ? apiErr : 'Missing error message'
}

export const handleError = (
    err: RequestError,
    isRelation?: boolean
): Record<string, unknown> => {
    // if (!err.code) {
    //   return {
    //     form: `Uh oh. Something went wrong. [${err.message || err}]`
    //   }
    // }
    if (!err) return {}
    let fields: Record<string, unknown> = {}
    if (err.params) {
        for (let key in err.params) {
            if (key !== 'message') {
                const index = isRelation ? 2 : 1
                const fieldError = err.params[key] || ''
                fields[key.split('.')[index]] = processErrorMessage(
                    fieldError as string
                )
            }
        }
    }
    const detail = err.detail || ''
    let msg = err.params ? err.params.message || detail : detail
    msg = processErrorMessage(msg as string)
    return { form: msg, ...fields }
}

export const processErrorMessage = (msg: string) => {
    if (!msg) return errMessages.unknown
    if (msg.includes('METHOD NOT ALLOWED')) {
        return errMessages.notAllowed
    } else if (msg.includes('duplicates')) {
        return errMessages.duplicates
    } else if (msg.includes('The parameters of your request were invalid.')) {
        return errMessages.errorsBelow
    } else if (msg.includes('too short')) {
        return errMessages.belowMinimumLength
    } else if (msg.includes("not a 'money'")) {
        return errMessages.invalidAmount
    } else if (msg.includes("not a 'optional-money'")) {
        return errMessages.invalidAmount
    } else if (msg.includes("not a 'negative-money'")) {
        return errMessages.invalidAmount
    } else if (msg.includes("not a 'optional-positive-money'")) {
        return errMessages.invalidAmountPositive
    } else if (msg.includes("not a 'optional-emails'")) {
        return errMessages.invalidEmails
    } else if (msg.includes("not a 'optional-email'")) {
        return errMessages.invalidEmail
    } else if (msg.includes("not a 'email'")) {
        return errMessages.invalidEmail
    } else if (msg.includes("not a 'optional-domain'")) {
        return errMessages.invalidDomain
    } else if (msg.includes("not a 'optional-url'")) {
        return errMessages.invalidUrl
    } else if (msg.includes("not of type 'integer'")) {
        return errMessages.notInteger
    } else if (msg.includes('less than the minimum of 0')) {
        return errMessages.positiveInteger
    } else if (msg.includes("not a 'time'")) {
        return errMessages.invalidTime
    } else if (msg.includes("not a 'human-time'")) {
        return errMessages.invalidTime
    } else if (msg.includes("not a 'optional-date'")) {
        return errMessages.invalidDate
    } else if (msg.includes("not of type 'number'")) {
        return errMessages.invalidNumber
    } else if (msg.includes("is not a 'hex-color'")) {
        return errMessages.invalidHex
    } else if (msg.includes("is not a 'zip-code'")) {
        return errMessages.invalidZip
    } else if (msg.includes("not a 'user-password'")) {
        return errMessages.invalidPassword
    } else if (msg.includes('is a required property')) {
        return errMessages.requiredField
    } else if (msg.includes('Invalid password reset token')) {
        return errMessages.expiredToken
    } else if (msg.includes("does not match '^[ a-zA-Z0-9._-]*$'")) {
        return errMessages.invalidFilename
    } else if (msg.includes('The requested object does not exist.')) {
        return errMessages.notExist
    } else if (msg.includes('departure_time is in the past')) {
        return errMessages.distanceSurcharge
    } else if (msg.includes('Order Times are already defined')) {
        return errMessages.orderTimes
    } else if (msg.includes('undefined')) {
        return errMessages.serverError
    }
    return msg
}

export const errMessages = {
    unknown: 'Unknown error. Please contact support.',
    forbidden:
        'Your account does not have access to this page. Please contact your brand admin to request access.',
    expiredToken:
        'Reset token has expired. Please head back to the login form and try again.',
    notAllowed: "This operation isn't allowed for this entity",
    duplicates:
        'One or more fields are already in use. Please choose different values.',
    errorsBelow: 'There are one or more errors below.',
    emptyField: 'This field cannot be empty',
    belowMinimumLength: 'Below the minimum characters',
    invalidAmount: 'Invalid amount',
    invalidAmountPositive: 'Invalid amount, leave blank for no maximum',
    invalidDomain: 'Invaiid domain, do not include http part of URL',
    invalidUrl:
        'Invaiid URL, must include the http section, such as https://www.google.com',
    invalidEmail: 'Invaiid email address',
    invalidEmails: 'One or more email addresses are invaiid',
    notInteger: 'Must be an integer',
    positiveInteger: 'Must be a positive integer',
    invalidTime: 'Enter in HH:MM AM|PM format (e.g. 9:40 AM)',
    invalidDate: 'Enter in YYYY-MM-DD format or leave blank',
    invalidNumber: 'Enter as a number with or without decimals',
    invalidHex: 'Enter as a hexidecimal color code',
    invalidZip: 'Enter a valid 5 digit zip code',
    invalidPassword: 'Invalid password. Please see notes below and try again.',
    requiredField: 'This field is required',
    invalidFilename: 'Invalid filename. Please rename the file and try again.',
    notExist: 'The requested entity does not exist.',
    serverError: 'Unknown error. Please contact support.',
    invalidHours: 'One or more invalid times submitted. Please see below.',
    locationClosed:
        'This location is closed or otherwise not able to accept orders at the selected time. Please try changing your order time.',
    serviceTypeNotAvailable:
        'This location does not offer the selected service type at this time. Please switch to another service type.',
    notInZone:
        'Selected address not in the delivery zone for this revenue center',
    missingAddress:
        'An address is required for delivery orders. Please add one.',
    orderNotFound:
        "Sorry, but we couldn't find an order matching that ID. Please try again.",
    distanceSurcharge:
        "Distance-based surcharges can't be applied to orders with requested times in the past. Please adjust your requested delivery time.",
    missingAddressDeliveryZone:
        "Please add an address for this revenue center or the revenue center's parent store before setting a delivery zone",
    orderTimes:
        'Hours cannot be defined for service types where order windows are already defined.',
}

export const errorsApi = {
    notAuthorized: {
        code: 'not_authorized',
        status: 401,
        title: 'Not Authorized',
        detail: 'Your session has expired. Please login again.',
    },
    methodNotAllowed: {
        code: 'method_not_allowed',
        status: 405,
        title: 'Method Not Allowed',
        detail: 'The method is not allowed for the requested URL.',
    },
    parseError: {
        code: 'parse_error',
        status: 422,
        title: 'Cannot Read File',
        detail: 'There was an error reading this file. Please contact Support.',
    },
    internalServerError: {
        code: 'internal_server_error',
        status: 500,
        title: 'Internal Server Error',
        detail: 'Internal server error. Please contact Support.',
    },
    notImplemented: {
        code: 'not_implemented',
        status: 501,
        title: 'Servers Overloaded',
        detail: 'Servers temporarily overloaded. Please retry your request. If this issue persists, please contact Support.',
    },
    badGateway: {
        code: 'bad_gateway',
        status: 502,
        title: 'Bad Gateway',
        detail: 'Temporary gateway error. Please retry your request. If this issue persists, please contact Support.',
    },
    tempUnavailable: {
        code: 'temporarily_unavailable',
        status: 503,
        title: 'Service Temporarily Unavailable',
        detail: 'Service Temporarily Unavailable. Please retry your request. If this issue persists, please contact Support.',
    },
    gatewayTimeout: {
        code: 'gateway_timeout',
        status: 504,
        title: 'Gateway Timeout',
        detail: 'Gateway Timeout. Please contact Support.',
    },
}
