import { APIGatewayEvent, Callback, Context, Handler } from 'aws-lambda';
import Foo from './foo';

export const hello: Handler = (
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

  cb(null, response);
};
