class Node
{
    value = null;
    nextNode = null;

    constructor(value) 
    {
        this.value = value;
    }
}

export default class LinkedList
{
    size = 0;
    head = null;
    tail = null;

    append(value)
    {
        let node = new Node(value);

        if( !this.head )
            this.head = node;

        if( this.tail )
            this.tail.nextNode = node;

        this.tail = node;
    }

    prepend(value)
    {
        let node = new Node(value);
        node.nextNode = this.head;

        if( !this.tail )
            this.tail = node;

        this.head = node;
    }

    at(index)
    {
        for( let node = this.head, i = 0; node; node = node.nextNode, i++ ) {
            if( i == index )
                return node;
        }

        return null;
    }

    pop()
    {
        if( !this.tail )
            return;

        let lastNode = this.head;

        for( let node = lastNode; node; node = node.nextNode ) {
            if( node == this.tail ) {
                this.tail = lastNode;
                this.tail.nextNode = null;
                break;
            }

            lastNode = node;
        }
    }

    contains(value)
    {
        for( let node = this.head; node; node = node.nextNode ) {
            if( node.value == value )
                return true;
        }

        return false;
    }

    find(value)
    {
        for( let node = this.head, i = 0; node; node = node.nextNode, i++ ) {
            if( node.value == value )
                return i;
        }

        return null;
    }

    insertAt(value, index)
    {
        if( index == 0 ) {
            this.prepend(value);
            return;
        }

        let i = 0;
        let lastNode = this.head;

        for( let node = lastNode; node; node = node.nextNode, i++ ) {
            if( i == index ) {
                let inserted = new Node(value);

                inserted.nextNode = node;
                lastNode.nextNode = inserted;
                return;
            }

            lastNode = node;
        }

        if( i == index )
            this.append(value);
    }

    removeAt(index)
    {
        if( index == 0 && this.head ) {
            if( this.head == this.tail )
                this.head = this.tail = null;
            else
                this.head = this.head.nextNode;

            return;
        }

        let lastNode = this.head;

        for( let node = lastNode, i = 0; node; node = node.nextNode, i++ ) {
            if( i == index ) {
                lastNode.nextNode = node.nextNode;
                return;
            }

            lastNode = node;
        }
    }

    toString()
    {
        let str = "";

        for( let node = this.head; node; node = node.nextNode )
            str += `( ${node.value} ) -> `;

        str += '( null )';

        return str;
    }
};