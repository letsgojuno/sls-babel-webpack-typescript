import { APIGatewayEvent, Callback, Context, Handler } from 'aws-lambda';
import Foo from './foo';
import AWS from 'aws-sdk';

const sts = new AWS.STS();

export const hello: Handler = async (
  event: APIGatewayEvent,
  context: Context,
  cb: Callback
) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: new Foo().render(),
      input: event
    })
  };

  const resp = await sts.getCallerIdentity().promise();

  return response;
};
