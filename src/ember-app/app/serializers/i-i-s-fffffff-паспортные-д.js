import { Serializer as ПаспортныеДSerializer } from
  '../mixins/regenerated/serializers/i-i-s-fffffff-паспортные-д';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ПаспортныеДSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
