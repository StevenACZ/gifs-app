export interface GiphyResponse {
  data: Gif[];
  meta: Meta;
  pagination: Pagination;
}

export interface Gif {
  type: string;
  id: string;
  url: string;
  slug: string;
  bitly_gif_url?: string;
  bitly_url?: string;
  embed_url: string;
  username: string;
  source: string;
  title: string;
  rating: string;
  content_url: string;
  source_tld: string;
  source_post_url: string;
  is_sticker: number;
  import_datetime: string;
  trending_datetime?: string;
  images: Images;
  user?: User;
  analytics_response_payload: string;
  analytics: Analytics;
  alt_text: string;
}

export interface Images {
  original: Image;
  downsized: Image;
  downsized_large: Image;
  downsized_medium: Image;
  downsized_small: {
    height: string;
    width: string;
    mp4_size: string;
    mp4: string;
  };
  downsized_still: Image;
  fixed_height: Image;
  fixed_height_downsampled: Image;
  fixed_height_small: Image;
  fixed_height_small_still: Image;
  fixed_height_still: Image;
  fixed_width: Image;
  fixed_width_downsampled: Image;
  fixed_width_small: Image;
  fixed_width_small_still: Image;
  fixed_width_still: Image;
  looping: {
    mp4_size: string;
    mp4: string;
  };
  original_still: Image;
  original_mp4: Image;
  preview: Image;
  preview_gif: Image;
  preview_webp: Image;
  hd?: Image;
  '480w_still': Image;
}

export interface Image {
  height: string;
  width: string;
  size?: string;
  url: string;
  mp4_size?: string;
  mp4?: string;
  webp_size?: string;
  webp?: string;
  frames?: string;
  hash?: string;
}

export interface User {
  avatar_url: string;
  banner_image: string;
  banner_url: string;
  profile_url: string;
  username: string;
  display_name: string;
  description: string;
  instagram_url: string;
  website_url: string;
  is_verified: boolean;
}

export interface Analytics {
  onload: {
    url: string;
  };
  onclick: {
    url: string;
  };
  onsent: {
    url: string;
  };
}

export interface Meta {
  status: number;
  msg: string;
  response_id: string;
}

export interface Pagination {
  total_count: number;
  count: number;
  offset: number;
}
