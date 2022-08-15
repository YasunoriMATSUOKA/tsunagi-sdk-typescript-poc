import { CatjsonType, Layer } from './models';
import { toCamelCase } from './toCamelCase';

export function loadLayout(tx: { type: string } & {}, catjson: CatjsonType, isEmbedded: boolean): Layer[] | undefined {
  let prefix: 'Embedded' | '';
  if (isEmbedded) {
    prefix = 'Embedded';
  } else {
    prefix = '';
  }

  let factoryType: 'EmbeddedTransaction' | 'Transaction';
  if (isEmbedded) {
    factoryType = 'EmbeddedTransaction';
  } else {
    factoryType = 'Transaction';
  }

  let layoutName: string;
  if (tx.type === 'AGGREGATE_COMPLETE') {
    layoutName = 'AggregateCompleteTransaction';
  } else if (tx.type === 'AGGREGATE_BONDED') {
    layoutName = 'AggregateBondedTransaction';
  } else {
    layoutName = prefix + toCamelCase(tx.type) + 'Transaction';
  }

  const factory = (catjson as ({ factory_type?: string; name?: string; layout?: Layer[] } & {})[]).find(
    (item) => item.factory_type === factoryType + 'Transaction' && item.name === layoutName,
  );
  return factory?.layout;
}
