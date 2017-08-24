export interface Item {
    content: string;
    content_type: string;
    feed_item_id: string;
    html_content: string;
    id: string;
    item_link: string;
    language: string;
    link: string;
    my_stream_item_id: string;
    publish_time: string;
    related_entities: any[];
    related_items: any;
    share_link: string;
    tags: any;
    teaser: string;
    title: string;
    type: string;
    images: Image;
    video_src: any;
}

interface Image {
    large: string;
    share: string;
    thumb: string;
}
