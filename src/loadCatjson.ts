import {
  accountAddressRestrictionCatjson,
  accountMetadataCatjson,
  accountMosaicRestrictionCatjson,
  accountOperationRestrictionCatjson,
  accountStateCatjson,
  accountStateTypesCatjson,
  addressAliasCatjson,
  // addressResolutionStatementCatjson,
  aggregateCatjson,
  blockStatementCatjson,
  CatjsonType,
  cosignatureCatjson,
  finalizationRoundCatjson,
  finalizedBlockHeaderCatjson,
  hashLockCatjson,
  lockHashReceiptsCatjson,
  lockInfoCatjson,
  lockSecretReceiptsCatjson,
  lockSecretTypesCatjson,
  metadataEntryCatjson,
  metadataEntryTypesCatjson,
  mosaicAddressRestrictionCatjson,
  mosaicAliasCatjson,
  mosaicDefinitionCatjson,
  mosaicEntryCatjson,
  mosaicEntryTypesCatjson,
  mosaicGlobalRestrictionCatjson,
  mosaicMetadataCatjson,
  mosaicReceiptsCatjson,
  // mosaicResoutionStatementCatjson,
  mosaicSupplyChangeCatjson,
  mosaicSupplyRevocationCatjson,
  mosaicTypesCatjson,
  multisigAccountModificationCatjson,
  multisigEntryCatjson,
  namespaceHistoryCatjson,
  namespaceHistoryTypesCatjson,
  namespaceMetadataCatjson,
  namespaceReceiptsCatjson,
  namespaceRegistrationCatjson,
  namespaceTypesCatjson,
  nodeKeyLinkCatjson,
  receiptSourceCatjson,
  restrictionAccountCatjson,
  restrictionAccountTypesCatjson,
  restrictionMosaicEntryCatjson,
  restrictionMosaicTypesCatjson,
  secretLockCatjson,
  secretProofCatjson,
  // stateHeaderCatjson,
  transactionStatementCatjson,
  transferCatjson,
  votingKeyLinkCatjson,
  vrfKeyLinkCatjson,
} from './models';

export function loadCatjson(tx: { type: string } & {}, network: any = undefined): CatjsonType {
  switch (tx.type) {
    case 'AGGREGATE_COMPLETE':
      return aggregateCatjson;
    case 'AGGREGATE_BONDED':
      return aggregateCatjson;
    case 'ACCOUNT_ADDRESS_RESTRICTION':
      return accountAddressRestrictionCatjson;
    case 'ACCOUNT_METADATA':
      return accountMetadataCatjson;
    case 'ACCOUNT_MOSAIC_RESTRICTION':
      return accountMosaicRestrictionCatjson;
    case 'ACCOUNT_OPERATION_RESTRICTION':
      return accountOperationRestrictionCatjson;
    case 'ACCOUNT_STATE':
      return accountStateCatjson;
    case 'ACCOUNT_STATE_TYPES':
      return accountStateTypesCatjson;
    case 'ADDRESS_ALIAS':
      return addressAliasCatjson;
    // case 'ADDRESS_RESOLUTION_STATEMENT':
    //   return addressResolutionStatementCatjson;
    case 'AGGREGATE':
      return aggregateCatjson;
    case 'BLOCK_STATEMENT':
      return blockStatementCatjson;
    case 'COSIGNATURE':
      return cosignatureCatjson;
    case 'FINALIZATION_ROUND':
      return finalizationRoundCatjson;
    case 'FINALIZED_BLOCK_HEADER':
      return finalizedBlockHeaderCatjson;
    case 'HASH_LOCK':
      return hashLockCatjson;
    case 'LOCK_HASH_RECEIPTS':
      return lockHashReceiptsCatjson;
    case 'LOCK_INFO':
      return lockInfoCatjson;
    case 'LOCK_SECRET_RECEIPTS':
      return lockSecretReceiptsCatjson;
    case 'LOCK_SECRET_TYPES':
      return lockSecretTypesCatjson;
    case 'METADATA_ENTRY':
      return metadataEntryCatjson;
    case 'METADATA_ENTRY_TYPES':
      return metadataEntryTypesCatjson;
    case 'MOSAIC_ADDRESS_RESTRICTION':
      return mosaicAddressRestrictionCatjson;
    case 'MOSAIC_ALIAS':
      return mosaicAliasCatjson;
    case 'MOSAIC_DEFINITION':
      return mosaicDefinitionCatjson;
    case 'MOSAIC_ENTRY':
      return mosaicEntryCatjson;
    case 'MOSAIC_ENTRY_TYPES':
      return mosaicEntryTypesCatjson;
    case 'MOSAIC_GLOBAL_RESTRICTION':
      return mosaicGlobalRestrictionCatjson;
    case 'MOSAIC_METADATA':
      return mosaicMetadataCatjson;
    case 'MOSAIC_RECEIPTS':
      return mosaicReceiptsCatjson;
    // case 'MOSAIC_RESOLUTION_STATEMENT':
    //   return mosaicResolutionStatementCatjson;
    case 'MOSAIC_SUPPLY_CHANGE':
      return mosaicSupplyChangeCatjson;
    case 'MOSAIC_SUPPLY_REVOCATION':
      return mosaicSupplyRevocationCatjson;
    case 'MOSAIC_TYPES':
      return mosaicTypesCatjson;
    case 'MULTISIG_ACCOUNT_MODIFICATION':
      return multisigAccountModificationCatjson;
    case 'MULTISIG_ENTRY':
      return multisigEntryCatjson;
    case 'NAMESPACE_HISTORY':
      return namespaceHistoryCatjson;
    case 'NAMESPACE_HISTORY_TYPES':
      return namespaceHistoryTypesCatjson;
    case 'NAMESPACE_METADATA':
      return namespaceMetadataCatjson;
    case 'NAMESPACE_RECEIPTS':
      return namespaceReceiptsCatjson;
    case 'NAMESPACE_REGISTRATION':
      return namespaceRegistrationCatjson;
    case 'NAMESPACE_TYPES':
      return namespaceTypesCatjson;
    case 'NODE_KEY_LINK':
      return nodeKeyLinkCatjson;
    case 'RECEIPT_SOURCE':
      return receiptSourceCatjson;
    case 'RESTRICTION_ACCOUNT':
      return restrictionAccountCatjson;
    case 'RESTRICTION_ACCOUNT_TYPES':
      return restrictionAccountTypesCatjson;
    case 'RESTRICTION_MOSAIC_ENTRY':
      return restrictionMosaicEntryCatjson;
    case 'RESTRICTION_MOSAIC_TYPES':
      return restrictionMosaicTypesCatjson;
    case 'SECRET_LOCK':
      return secretLockCatjson;
    case 'SECRET_PROOF':
      return secretProofCatjson;
    // case 'STATE_HEADER':
    //   return stateHeaderCatjson;
    case 'TRANSACTION_STATEMENT':
      return transactionStatementCatjson;
    case 'TRANSFER':
      return transferCatjson;
    case 'VOTING_KEY_LINK':
      return votingKeyLinkCatjson;
    case 'VRF_KEY_LINK':
      return vrfKeyLinkCatjson;
    default:
      throw Error('Unknown tx.type.');
  }
}
