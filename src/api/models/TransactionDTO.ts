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

import { exists, mapValues } from '../runtime';
import {
    EntityDTO,
    EntityDTOFromJSON,
    EntityDTOFromJSONTyped,
    EntityDTOToJSON,
} from './EntityDTO';
import {
    NetworkTypeEnum,
    NetworkTypeEnumFromJSON,
    NetworkTypeEnumFromJSONTyped,
    NetworkTypeEnumToJSON,
} from './NetworkTypeEnum';
import {
    SizePrefixedEntityDTO,
    SizePrefixedEntityDTOFromJSON,
    SizePrefixedEntityDTOFromJSONTyped,
    SizePrefixedEntityDTOToJSON,
} from './SizePrefixedEntityDTO';
import {
    TransactionBodyDTO,
    TransactionBodyDTOFromJSON,
    TransactionBodyDTOFromJSONTyped,
    TransactionBodyDTOToJSON,
} from './TransactionBodyDTO';
import {
    VerifiableEntityDTO,
    VerifiableEntityDTOFromJSON,
    VerifiableEntityDTOFromJSONTyped,
    VerifiableEntityDTOToJSON,
} from './VerifiableEntityDTO';

/**
 * 
 * @export
 * @interface TransactionDTO
 */
export interface TransactionDTO {
    /**
     * A number that allows uint 32 values.
     * @type {number}
     * @memberof TransactionDTO
     */
    size: number;
    /**
     * Entity's signature generated by the signer.
     * @type {string}
     * @memberof TransactionDTO
     */
    signature: string;
    /**
     * Public key.
     * @type {string}
     * @memberof TransactionDTO
     */
    signerPublicKey: string;
    /**
     * Entity version.
     * @type {number}
     * @memberof TransactionDTO
     */
    version: number;
    /**
     * 
     * @type {NetworkTypeEnum}
     * @memberof TransactionDTO
     */
    network: NetworkTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof TransactionDTO
     */
    type: number;
    /**
     * Absolute amount. An amount of 123456789 (absolute) for a mosaic with divisibility 6 means 123.456789 (relative).
     * @type {string}
     * @memberof TransactionDTO
     */
    maxFee: string;
    /**
     * Duration expressed in number of blocks.
     * @type {string}
     * @memberof TransactionDTO
     */
    deadline: string;
}

export function TransactionDTOFromJSON(json: any): TransactionDTO {
    return TransactionDTOFromJSONTyped(json, false);
}

export function TransactionDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'size': json['size'],
        'signature': json['signature'],
        'signerPublicKey': json['signerPublicKey'],
        'version': json['version'],
        'network': NetworkTypeEnumFromJSON(json['network']),
        'type': json['type'],
        'maxFee': json['maxFee'],
        'deadline': json['deadline'],
    };
}

export function TransactionDTOToJSON(value?: TransactionDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'size': value.size,
        'signature': value.signature,
        'signerPublicKey': value.signerPublicKey,
        'version': value.version,
        'network': NetworkTypeEnumToJSON(value.network),
        'type': value.type,
        'maxFee': value.maxFee,
        'deadline': value.deadline,
    };
}
