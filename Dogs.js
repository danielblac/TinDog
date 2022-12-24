class Dogs {
    constructor(data) {
        Object.assign(this, data)
    }
    getDogHtml() {
        const { name, avatar, age, bio, hasBeenSwiped, hasBeenLiked } = this
        return `
        <img src="${avatar}" alt="dog-image">
		<div class="image-text">
            <p class="text-head shadow">${name}, ${age}</p>
	        <p class="shadow">${bio}</p>
		</div>`
    }
}

export default Dogs