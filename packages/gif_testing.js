// jshint esversion: 9

/**
 * @description null
 * @param {ParamsType} params list of command parameters
 * @param {?string} commandText text message
 * @param {!object} [secrets = {}] list of secrets
 * @return {Promise<SlackBodyType>} Response body
 */

async function _command(params = {}) {
	const caption = params.varArgs || ''; // for future use, use giphy api
	return {
		response_type: 'in_channel',
		blocks: [
			{
				type: 'image',
				alt_text: 'you have 20 seconds to comply',
				image_url: 'https://media.giphy.com/media/sqhkWQU8wmGsRksfOf/giphy.gif',
			},
			{
				type: 'section',
				text: {
					type: 'mrkdwn',
					text: 'A message *with some bold text* and _some italicized text_.',
				},
				block_id: 'text1',
			},
		],
	};
}
const main = async (args) => ({
	body: await _command(
		args.params,
		args.commandText,
		args.__secrets || {}
	).catch((error) => ({
		response_type: 'ephemeral',
		text: `Error: ${error.message}`,
	})),
});
module.exports = main;
