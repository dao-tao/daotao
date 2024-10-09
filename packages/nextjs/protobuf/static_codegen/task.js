// source: protobuf/ava/avs.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

goog.provide('proto.aggregator.Task');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.aggregator.Execution');
goog.require('proto.aggregator.TaskAction');
goog.require('proto.aggregator.TaskTrigger');
goog.require('proto.aggregator.UUID');

goog.forwardDeclare('proto.aggregator.TaskStatus');
goog.forwardDeclare('proto.aggregator.TaskType');
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.aggregator.Task = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.aggregator.Task.repeatedFields_, null);
};
goog.inherits(proto.aggregator.Task, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aggregator.Task.displayName = 'proto.aggregator.Task';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.aggregator.Task.repeatedFields_ = [12];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.aggregator.Task.prototype.toObject = function(opt_includeInstance) {
  return proto.aggregator.Task.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aggregator.Task} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aggregator.Task.toObject = function(includeInstance, msg) {
  var f, obj = {
    owner: jspb.Message.getFieldWithDefault(msg, 1, ""),
    smartAccountAddress: jspb.Message.getFieldWithDefault(msg, 2, ""),
    id: (f = msg.getId()) && proto.aggregator.UUID.toObject(includeInstance, f),
    taskType: jspb.Message.getFieldWithDefault(msg, 4, 0),
    action: (f = msg.getAction()) && proto.aggregator.TaskAction.toObject(includeInstance, f),
    trigger: (f = msg.getTrigger()) && proto.aggregator.TaskTrigger.toObject(includeInstance, f),
    startAt: jspb.Message.getFieldWithDefault(msg, 7, 0),
    expiredAt: jspb.Message.getFieldWithDefault(msg, 8, 0),
    memo: jspb.Message.getFieldWithDefault(msg, 9, ""),
    completedAt: jspb.Message.getFieldWithDefault(msg, 10, 0),
    status: jspb.Message.getFieldWithDefault(msg, 11, 0),
    executionsList: jspb.Message.toObjectList(msg.getExecutionsList(),
    proto.aggregator.Execution.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.aggregator.Task}
 */
proto.aggregator.Task.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aggregator.Task;
  return proto.aggregator.Task.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aggregator.Task} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aggregator.Task}
 */
proto.aggregator.Task.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOwner(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSmartAccountAddress(value);
      break;
    case 3:
      var value = new proto.aggregator.UUID;
      reader.readMessage(value,proto.aggregator.UUID.deserializeBinaryFromReader);
      msg.setId(value);
      break;
    case 4:
      var value = /** @type {!proto.aggregator.TaskType} */ (reader.readEnum());
      msg.setTaskType(value);
      break;
    case 5:
      var value = new proto.aggregator.TaskAction;
      reader.readMessage(value,proto.aggregator.TaskAction.deserializeBinaryFromReader);
      msg.setAction(value);
      break;
    case 6:
      var value = new proto.aggregator.TaskTrigger;
      reader.readMessage(value,proto.aggregator.TaskTrigger.deserializeBinaryFromReader);
      msg.setTrigger(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setStartAt(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setExpiredAt(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setMemo(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCompletedAt(value);
      break;
    case 11:
      var value = /** @type {!proto.aggregator.TaskStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 12:
      var value = new proto.aggregator.Execution;
      reader.readMessage(value,proto.aggregator.Execution.deserializeBinaryFromReader);
      msg.addExecutions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.aggregator.Task.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aggregator.Task.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aggregator.Task} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aggregator.Task.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOwner();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSmartAccountAddress();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getId();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.aggregator.UUID.serializeBinaryToWriter
    );
  }
  f = message.getTaskType();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getAction();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.aggregator.TaskAction.serializeBinaryToWriter
    );
  }
  f = message.getTrigger();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.aggregator.TaskTrigger.serializeBinaryToWriter
    );
  }
  f = message.getStartAt();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = message.getExpiredAt();
  if (f !== 0) {
    writer.writeInt64(
      8,
      f
    );
  }
  f = message.getMemo();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getCompletedAt();
  if (f !== 0) {
    writer.writeInt64(
      10,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      11,
      f
    );
  }
  f = message.getExecutionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      12,
      f,
      proto.aggregator.Execution.serializeBinaryToWriter
    );
  }
};


/**
 * optional string owner = 1;
 * @return {string}
 */
proto.aggregator.Task.prototype.getOwner = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.aggregator.Task} returns this
 */
proto.aggregator.Task.prototype.setOwner = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string smart_account_address = 2;
 * @return {string}
 */
proto.aggregator.Task.prototype.getSmartAccountAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.aggregator.Task} returns this
 */
proto.aggregator.Task.prototype.setSmartAccountAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional UUID id = 3;
 * @return {?proto.aggregator.UUID}
 */
proto.aggregator.Task.prototype.getId = function() {
  return /** @type{?proto.aggregator.UUID} */ (
    jspb.Message.getWrapperField(this, proto.aggregator.UUID, 3));
};


/**
 * @param {?proto.aggregator.UUID|undefined} value
 * @return {!proto.aggregator.Task} returns this
*/
proto.aggregator.Task.prototype.setId = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.aggregator.Task} returns this
 */
proto.aggregator.Task.prototype.clearId = function() {
  return this.setId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.aggregator.Task.prototype.hasId = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional TaskType task_type = 4;
 * @return {!proto.aggregator.TaskType}
 */
proto.aggregator.Task.prototype.getTaskType = function() {
  return /** @type {!proto.aggregator.TaskType} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.aggregator.TaskType} value
 * @return {!proto.aggregator.Task} returns this
 */
proto.aggregator.Task.prototype.setTaskType = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional TaskAction action = 5;
 * @return {?proto.aggregator.TaskAction}
 */
proto.aggregator.Task.prototype.getAction = function() {
  return /** @type{?proto.aggregator.TaskAction} */ (
    jspb.Message.getWrapperField(this, proto.aggregator.TaskAction, 5));
};


/**
 * @param {?proto.aggregator.TaskAction|undefined} value
 * @return {!proto.aggregator.Task} returns this
*/
proto.aggregator.Task.prototype.setAction = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.aggregator.Task} returns this
 */
proto.aggregator.Task.prototype.clearAction = function() {
  return this.setAction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.aggregator.Task.prototype.hasAction = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional TaskTrigger trigger = 6;
 * @return {?proto.aggregator.TaskTrigger}
 */
proto.aggregator.Task.prototype.getTrigger = function() {
  return /** @type{?proto.aggregator.TaskTrigger} */ (
    jspb.Message.getWrapperField(this, proto.aggregator.TaskTrigger, 6));
};


/**
 * @param {?proto.aggregator.TaskTrigger|undefined} value
 * @return {!proto.aggregator.Task} returns this
*/
proto.aggregator.Task.prototype.setTrigger = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.aggregator.Task} returns this
 */
proto.aggregator.Task.prototype.clearTrigger = function() {
  return this.setTrigger(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.aggregator.Task.prototype.hasTrigger = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional int64 start_at = 7;
 * @return {number}
 */
proto.aggregator.Task.prototype.getStartAt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.aggregator.Task} returns this
 */
proto.aggregator.Task.prototype.setStartAt = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional int64 expired_at = 8;
 * @return {number}
 */
proto.aggregator.Task.prototype.getExpiredAt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.aggregator.Task} returns this
 */
proto.aggregator.Task.prototype.setExpiredAt = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional string memo = 9;
 * @return {string}
 */
proto.aggregator.Task.prototype.getMemo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.aggregator.Task} returns this
 */
proto.aggregator.Task.prototype.setMemo = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional int64 completed_at = 10;
 * @return {number}
 */
proto.aggregator.Task.prototype.getCompletedAt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.aggregator.Task} returns this
 */
proto.aggregator.Task.prototype.setCompletedAt = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional TaskStatus status = 11;
 * @return {!proto.aggregator.TaskStatus}
 */
proto.aggregator.Task.prototype.getStatus = function() {
  return /** @type {!proto.aggregator.TaskStatus} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {!proto.aggregator.TaskStatus} value
 * @return {!proto.aggregator.Task} returns this
 */
proto.aggregator.Task.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 11, value);
};


/**
 * repeated Execution executions = 12;
 * @return {!Array<!proto.aggregator.Execution>}
 */
proto.aggregator.Task.prototype.getExecutionsList = function() {
  return /** @type{!Array<!proto.aggregator.Execution>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.aggregator.Execution, 12));
};


/**
 * @param {!Array<!proto.aggregator.Execution>} value
 * @return {!proto.aggregator.Task} returns this
*/
proto.aggregator.Task.prototype.setExecutionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 12, value);
};


/**
 * @param {!proto.aggregator.Execution=} opt_value
 * @param {number=} opt_index
 * @return {!proto.aggregator.Execution}
 */
proto.aggregator.Task.prototype.addExecutions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 12, opt_value, proto.aggregator.Execution, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.aggregator.Task} returns this
 */
proto.aggregator.Task.prototype.clearExecutionsList = function() {
  return this.setExecutionsList([]);
};

