const TheirMessage= ({ lastMessage, Message }) =>
{
    const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== Message.sender.username;
    return (
        <div className="message-row">
        {isFirstMessageByUser && (
            <div className="message-avatar"
            style={{ backgroundImage: Message.sender && `url(${	Message.sender.avatar})` }}
	        />
        )}

	    {Message.attachments && Message.attachments.length > 0
	    ? (
	    <img
	    src={Message.attachments[0].file}
	    alt="message-attachment"
	    className="message-image"
	    style={{ marginLeft: isFirstMessageByUser ? '4px' : '48px' }}
	    />
	    )
		: (
	    <div className="message" style={{ float: 'left', backgroundColor: '#CABCDC', marginLeft: isFirstMessageByUser ? '4px' : '48px' }}>
	    {Message.text}
	    </div>
	    )}

        </div>
    );
    
};
export default TheirMessage;