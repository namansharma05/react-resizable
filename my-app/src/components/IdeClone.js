import React from "react";
import SampleSplitter from "./SampleSplitter";
import { useResizable } from "react-resizable-layout";
import { cn } from "../utils/cn";

const IdeClone = () => {
	const {
		isDragging: isTerminalDragging,
		position: terminalH,
		splitterProps: terminalDragBarProps,
	} = useResizable({
		axis: "y",
		initial: 150,
		min: 50,
		reverse: true,
	});
	const {
		isDragging: isFileDragging,
		position: fileW,
		splitterProps: fileDragBarProps,
	} = useResizable({
		axis: "x",
		initial: 250,
		min: 50,
	});
	const {
		isDragging: isPluginDragging,
		position: pluginW,
		splitterProps: pluginDragBarProps,
	} = useResizable({
		axis: "x",
		initial: 200,
		min: 50,
		reverse: true,
	});

	return (
		<div className={"flex flex-column h-screen bg-dark font-mono color-white overflow-hidden"}>
			<div className={"flex grow"}>
				<div
					className={cn("shrink-0 contents", isFileDragging && "dragging")}
					style={{ width: fileW }}>
					Component 1
				</div>
				<SampleSplitter
					isDragging={isFileDragging}
					{...fileDragBarProps}
				/>
				<div className={"flex grow"}>
					<div className={"grow bg-darker contents"}>Component 2</div>
				</div>
			</div>
			<SampleSplitter
				dir={"horizontal"}
				isDragging={isTerminalDragging}
				{...terminalDragBarProps}
			/>
			<div
				className={cn("shrink-0 bg-darker contents", isTerminalDragging && "dragging")}
				style={{ height: terminalH }}>
				Component 3
			</div>
		</div>
	);
};

export default IdeClone;
