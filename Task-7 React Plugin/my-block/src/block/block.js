/**
 * BLOCK: my-block
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
registerBlockType( 'cgb/block-my-block', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'my-block - CGB Block' ), // Block title.
	icon: 'testimonial', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'my-block — CGB Block' ),
		__( 'CGB Example' ),
		__( 'create-guten-block' ),
	],

	attributes: {
		categories: {
			type: 'object',
		},
		selectedCategory: {
			type: 'string',
		},
		postsPerPage: {
			type: 'string',
		},
	},

	edit: ( props ) => {
		// Creates a <p class='wp-block-cgb-block-my-block'></p>.
		if ( ! props.attributes.categories ) {
			wp.apiFetch( {
				url:'/wp-json/wp/v2/categories'
			}).then(categories=>{
				props.setAttributes({
					categories:categories
				})
			})
		}

		console.log(props.attributes)

		if( !props.attributes.categories){
			return 'Loading...'
		}

		if( props.attributes.categories && props.attributes.categories===0){
			return 'No category found'
		}

		function updateCategory(e){
			props.setAttributes({
				selectedCategory:e.target.value
			})

		}

		function updatePostPerPage(e){
			props.setAttributes({
				postsPerPage:e.target.value
			})

		}

		return (
			<div>
				<lable>Category</lable>
				<select onChange={updateCategory} value={props.attributes.selectedCategory} >
					{
						props.attributes.categories.map(category=>{
							return (
								<option value={ category.id} key={ category.id}>
									{category.name}
								</option>
							)
						})
					}
				</select>
					<br></br>
				<lable>Post Per page</lable>
				<input type="text" onBlur={updatePostPerPage} value ={props.attributes.postsPerPage}/>
			</div>

		);
	},

	save: ( props ) => {
		return null;
	},
} );
