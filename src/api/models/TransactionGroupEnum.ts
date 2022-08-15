/* tslint:disable */
/* eslint-disable */
/**
 * Catapult REST Endpoints
 * OpenAPI Specification of catapult-rest
 *
 * The version of the OpenAPI document: 1.0.4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * A transaction could be classified in the following groups:
 * * Unconfirmed: The transaction reached the P2P network. At this point, it is not guaranteed that the transaction will be included in a block.
 * * Confirmed: The transaction is included in a block.
 * * Partial: The transaction requires to be cosigned by other transaction participants in order to be included in a block.
 * * Failed: The transaction did not pass the network validation, and it was rejected.
 * @export
 */
export const TransactionGroupEnum = {
    Unconfirmed: 'unconfirmed',
    Confirmed: 'confirmed',
    Failed: 'failed',
    Partial: 'partial'
} as const;
export type TransactionGroupEnum = typeof TransactionGroupEnum[keyof typeof TransactionGroupEnum];


export function TransactionGroupEnumFromJSON(json: any): TransactionGroupEnum {
    return TransactionGroupEnumFromJSONTyped(json, false);
}

export function TransactionGroupEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionGroupEnum {
    return json as TransactionGroupEnum;
}

export function TransactionGroupEnumToJSON(value?: TransactionGroupEnum | null): any {
    return value as any;
}

