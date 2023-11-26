// Copyright (c) 2023 KibaOfficial
//
// This software is released under the MIT License.

import { Song } from "@/types";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

// https://opensource.org/licenses/MIT
const useLoadImage = (song: Song) => {
  const supabaseClient = useSupabaseClient();

  if (!song) {
    return null;
  }

  const { data: imageData } = supabaseClient.storage
    .from("images")
    .getPublicUrl(song.image_path);

  return imageData.publicUrl;
};

export default useLoadImage;
