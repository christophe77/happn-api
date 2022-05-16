type Trait = {
	id: string;
	default_emoji: string;
	default_label: string;
	default_short_label: string;
	short_label_localized: {
		value: string;
		tags: string[];
	}[];
	emoji_localized: {
		value: '🔎';
		tags: string[];
	}[];
	label_localized: {
		value: string;
		tags: string[];
	}[];
	sensitive_trait: boolean;
	answer: {
		type: string;
		single: {
			id: string;
			default_label: string;
			label_localized: {
				value: string;
				tags: string[];
			}[];
		};
	};
};

export default Trait;
