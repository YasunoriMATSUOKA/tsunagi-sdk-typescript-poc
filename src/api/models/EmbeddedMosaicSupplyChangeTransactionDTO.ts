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
    EmbeddedTransactionDTO,
    EmbeddedTransactionDTOFromJSON,
    EmbeddedTransactionDTOFromJSONTyped,
    EmbeddedTransactionDTOToJSON,
} from './EmbeddedTransactionDTO';
import {
    MosaicSupplyChangeActionEnum,
    MosaicSupplyChangeActionEnumFromJSON,
    MosaicSupplyChangeActionEnumFromJSONTyped,
    MosaicSupplyChangeActionEnumToJSON,
} from './MosaicSupplyChangeActionEnum';
import {
    MosaicSupplyChangeTransactionBodyDTO,
    MosaicSupplyChangeTransactionBodyDTOFromJSON,
    MosaicSupplyChangeTransactionBodyDTOFromJSONTyped,
    MosaicSupplyChangeTransactionBodyDTOToJSON,
} from './MosaicSupplyChangeTransactionBodyDTO';
import {
    NetworkTypeEnum,
    NetworkTypeEnumFromJSON,
    NetworkTypeEnumFromJSONTyped,
    NetworkTypeEnumToJSON,
} from './NetworkTypeEnum';

/**
 * 
 * @export
 * @interface EmbeddedMosaicSupplyChangeTransactionDTO
 */
export interface EmbeddedMosaicSupplyChangeTransactionDTO {
    /**
     * Public key.
     * @type {string}
     * @memberof EmbeddedMosaicSupplyChangeTransactionDTO
     */
    signerPublicKey: string;
    /**
     * Entity version.
     * @type {number}
     * @memberof EmbeddedMosaicSupplyChangeTransactionDTO
     */
    version: number;
    /**
     * 
     * @type {NetworkTypeEnum}
     * @memberof EmbeddedMosaicSupplyChangeTransactionDTO
     */
    network: NetworkTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof EmbeddedMosaicSupplyChangeTransactionDTO
     */
    type: number;
    /**
     * Mosaic identifier. If the most significant bit of byte 0 is set, a namespaceId (alias)
     * is used instead of the real mosaic identifier.
     * @type {string}
     * @memberof EmbeddedMosaicSupplyChangeTransactionDTO
     */
    mosaicId: string;
    /**
     * Absolute amount. An amount of 123456789 (absolute) for a mosaic with divisibility 6 means 123.456789 (relative).
     * @type {string}
     * @memberof EmbeddedMosaicSupplyChangeTransactionDTO
     */
    delta: string;
    /**
     * 
     * @type {MosaicSupplyChangeActionEnum}
     * @memberof EmbeddedMosaicSupplyChangeTransactionDTO
     */
    action: MosaicSupplyChangeActionEnum;
}

export function EmbeddedMosaicSupplyChangeTransactionDTOFromJSON(json: any): EmbeddedMosaicSupplyChangeTransactionDTO {
    return EmbeddedMosaicSupplyChangeTransactionDTOFromJSONTyped(json, false);
}

export function EmbeddedMosaicSupplyChangeTransactionDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmbeddedMosaicSupplyChangeTransactionDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'signerPublicKey': json['signerPublicKey'],
        'version': json['version'],
        'network': NetworkTypeEnumFromJSON(json['network']),
        'type': json['type'],
        'mosaicId': json['mosaicId'],
        'delta': json['delta'],
        'action': MosaicSupplyChangeActionEnumFromJSON(json['action']),
    };
}

export function EmbeddedMosaicSupplyChangeTransactionDTOToJSON(value?: EmbeddedMosaicSupplyChangeTransactionDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'signerPublicKey': value.signerPublicKey,
        'version': value.version,
        'network': NetworkTypeEnumToJSON(value.network),
        'type': value.type,
        'mosaicId': value.mosaicId,
        'delta': value.delta,
        'action': MosaicSupplyChangeActionEnumToJSON(value.action),
    };
}
