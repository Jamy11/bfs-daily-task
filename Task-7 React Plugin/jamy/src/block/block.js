/**
 * BLOCK: jamy
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './editor.scss';
import './style.scss';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks

/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( 'cgb/block-jamy', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'jamy - CGB Block' ), // Block title.
	icon: 'shield', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'jamy — CGB Block' ),
		__( 'CGB Example' ),
		__( 'create-guten-block' ),
	],

	attributes: {
		checkData: {
			type: 'object',
		},
		inputValue: {
			type: 'string',
		},
	},
	edit: ( props ) => {
		// Creates a <p class='wp-block-cgb-block-jamy'></p>.
		// if ( ! props.attributes.checkData ) {
		// 	wp.apiFetch ( {
		// 		url: '/wp-json/wp/v2/checkData'
		// 	} ).then ( checkData=>{
		// 		props.setAttributes ( {
		// 			checkData:checkData,
		// 		})
		// 	})
		// }

		// if ( ! props.attributes.checkData ) {
		// 	return 'Loading...';
		// }

		function changeHeading(e) {
			props.setAttributes({
				inputValue:e.target.value
			})
		}
		console.log(props.attributes)
		return (
			<div>
				<lable>Input Your Heading</lable>
				<input type='text' onChange={changeHeading} value ={props.attributes.inputValue}/>
			</div>
		);
	},

	save: ( props ) => {
		return null;
	},
} );
