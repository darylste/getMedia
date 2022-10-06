import React from 'react';
import './Spacer.styles.scss';
const classNames = require('classnames');

type Spacing = 'sm' | 'md' | 'lg';

interface ISpacerProps {
	children?: React.ReactNode;
	top?: Spacing;
	right?: Spacing;
	bottom?: Spacing;
	left?: Spacing;
}

const Spacer: React.FC<ISpacerProps> = ({
	top,
	right,
	bottom,
	left,
	children,
}) => {
	return (
		<div
			className={classNames(
				top && `top-${top}`,
				right && `right-${right}`,
				bottom && `bottom-${bottom}`,
				left && `left-${left}`,
			)}
		>
			{children}
		</div>
	);
};

export default Spacer;
