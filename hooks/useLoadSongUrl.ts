// Copyright (c) 2023 KibaOfficial
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { Song } from "@/types";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

const useLoadSongUrl = (song: Song) => {
  const supabaseClient = useSupabaseClient();

  if (!song) {
    return '';
  };

  const { data: songData } = supabaseClient
    .storage
    .from('songs')
    .getPublicUrl(song.song_path)

    return songData.publicUrl;
}

export default useLoadSongUrl;