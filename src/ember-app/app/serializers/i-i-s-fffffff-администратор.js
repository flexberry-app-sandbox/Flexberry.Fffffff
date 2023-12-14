import { Serializer as АдминистраторSerializer } from
  '../mixins/regenerated/serializers/i-i-s-fffffff-администратор';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(АдминистраторSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
