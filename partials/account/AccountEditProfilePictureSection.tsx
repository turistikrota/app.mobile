import {
  Avatar,
  AvatarFallbackText,
  AvatarImage,
  Button,
  Center,
  Spinner,
  Text,
} from "@gluestack-ui/themed";
import * as FileSystem from "expo-file-system";
import * as ImagePicker from "expo-image-picker";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import BoxIcon from "~assets/Icons/BoxIcon";
import { Services, apiUrl } from "~config/services";
import { useAlert } from "~hooks/alert";

type Props = {
  avatar: string;
  fullName: string;
  userName: string;
  onUpdate: () => void;
};

const AccountEditProfilePictureSection: React.FC<Props> = ({
  avatar,
  userName,
  fullName,
  onUpdate,
}) => {
  const { t } = useTranslation("account");
  const [loading, setLoading] = useState<boolean>(false);
  const [image, setImage] = useState<string | null>(null);
  const alert = useAlert();

  const uploadFileSystem = async (uri: string) => {
    const response = await FileSystem.uploadAsync(
      apiUrl(Services.Upload, `/@${userName}`),
      uri,
      {
        fieldName: "avatar",
        httpMethod: "POST",
        uploadType: FileSystem.FileSystemUploadType.MULTIPART,
        parameters: {
          username: userName,
        },
      }
    );
    setLoading(false);
    if ([200, 201].includes(response.status)) {
      alert.alert(t("edit.picture.uploaded"));
      onUpdate();
    } else {
      try {
        const body = await JSON.parse(response.body);
        if (body && body.message) {
          alert.alert(body.message);
        }
      } catch (e) {}
    }
  };
  const pickImage = async () => {
    setLoading(true);
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      selectionLimit: 1,
      allowsMultipleSelection: false,
    });
    if (!result.canceled) {
      const asset = result.assets[0];
      setImage(asset.uri);
      uploadFileSystem(asset.uri);
    } else {
      setLoading(false);
    }
  };
  return (
    <Center
      sx={{
        mt: "$2",
        mb: "$4",
      }}
    >
      <Avatar size="2xl" borderRadius="$sm" bgColor="$coolGray200">
        <AvatarFallbackText
          sx={{
            color: "$trueGray600",
          }}
        >
          {fullName}
        </AvatarFallbackText>
        <AvatarImage
          source={{
            uri: image ?? avatar,
          }}
          sx={{
            borderRadius: "$sm",
          }}
        />
      </Avatar>
      <Button
        sx={{
          mt: "$3",
          gap: "$1",
        }}
        variant="outline"
        disabled={loading}
        onPress={pickImage}
      >
        {loading ? (
          <Spinner />
        ) : (
          <>
            <BoxIcon name="edit" />
            <Text>{t("edit.picture.change")}</Text>
          </>
        )}
      </Button>
    </Center>
  );
};

export default AccountEditProfilePictureSection;
